import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  forwardRef,
} from '@angular/core';
import { collapse } from '../../animations/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

let uuid = 0;

@Component({
  selector: 'app-multiselect-autocomplate',
  templateUrl: './multiselect-autocomplate.component.html',
  styleUrl: './multiselect-autocomplate.component.scss',
  animations: [collapse],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiselectAutocomplateComponent),
      multi: true,
    },
  ],
})
export class MultiselectAutocomplateComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() placeholder: string = '';
  @Input() keyName: string = 'id';
  @Input() closeOtherDropDowns: boolean = true;
  @Input() singleSelect: boolean = false;
  @Input() inputColor: 'dark' | 'light' = 'light';
  @Input() setMargin: boolean = true;
  @Input() cutSide: 'left' | 'right' | 'both' | 'squad-small' = 'left';
  @Output() onSelect: EventEmitter<{ options: any[]; option: any }> =
    new EventEmitter();

  @ViewChild('multiselectAutocomplate')
  multiselectAutocomplate!: ElementRef<any>;
  @ViewChild('dropdownTemplate') dropdownTemplate!: TemplateRef<any>;
  @ViewChild('dropdown') dropdown!: ElementRef<any>;

  public filteredData: any[] = [];

  private dropdownElement: any;
  public isOpen: boolean = false;
  public isRotate: boolean = false;

  public selectetOptions: any[] = [];
  public disabled: boolean = false;
  public error: boolean = false;
  public success: boolean = false;
  public uniqId: string = this.getUniqueId();

  public getUniqueId() {
    return `app-multiselect-${uuid++}`;
  }

  public getSelected(item: any) {
    return this.selectetOptions.find(
      (el: any) => el[this.keyName] === item[this.keyName]
    );
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event) {
    this.isRotate = false;
    const selectList = this.dropdownElement?.rootNodes?.[0];
    if (selectList) {
      const rect =
        this.multiselectAutocomplate.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const dropdownHeight = 225;
      let topPosition = rect.bottom;
      if (windowHeight - rect.bottom < dropdownHeight + 10) {
        topPosition = rect.top - dropdownHeight - 6;
        this.isRotate = true;
        selectList.style.setProperty('transform', 'rotate(180deg)');
      } else {
        selectList.style.setProperty('transform', 'rotate(0deg)');
      }
      selectList.style.setProperty('top', topPosition + 3 + 'px');
      selectList.style.setProperty('left', rect.left + 'px');
      selectList.style.setProperty('max-height', '225px');
    }
  }

  @HostListener('document:click', ['$event'])
  public closeDropdown(event: MouseEvent) {
    const multiselectRef = this.multiselectAutocomplate?.nativeElement;
    const dropdownRef = this.dropdown?.nativeElement;
    if (!multiselectRef?.contains(event.target)) {
      if (this.isOpen && !dropdownRef?.contains(event.target)) {
        this.isOpen = false;
        setTimeout(() => this.destroyDropDown(), 100);
      }
    }
  }

  public ngOnInit() {
    this.filteredData = this.data;
  }

  public getFilteredSelect(event: any): void {
    this.filteredData = event;
  }

  public searchAutocomplateFilter(event: any): void {
    if (!event && !event.target && !event.target.value) {
    } else {
      const filteredList = this.data.filter((item: any) => {
        const valueName = item.name.toLowerCase().replace(/[ ]/g, '');
        const searchValue = event.target.value.toLowerCase();
        return valueName.startsWith(searchValue);
      });
      this.filteredData = filteredList;
    }
  }

  public selectItem(event: Event, item: any): void {
    event.stopPropagation();
    if (!this.singleSelect) {
      const foundedIndex = this.selectetOptions.findIndex(
        (el: any) => el[this.keyName] === item[this.keyName]
      );
      if (foundedIndex !== -1) {
        this.selectetOptions.splice(foundedIndex, 1);
      } else {
        this.selectetOptions.push(item);
      }
    } else {
      this.selectetOptions = [item];
    }
    this.onSelect.emit({ options: this.selectetOptions, option: item });
    this.onChange(this.selectetOptions);
  }

  public onChangeIsOpen(event: Event) {
    if (!this.closeOtherDropDowns) {
      event.stopPropagation();
    }

    if (!this.disabled) {
      this.onTouch();
      this.isOpen = !this.isOpen;

      this.isOpen
        ? this.createDropDown()
        : setTimeout(() => this.destroyDropDown(), 100);
    }
  }

  public createDropDown() {
    this.isRotate = false;
    const rect =
      this.multiselectAutocomplate.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const dropdownHeight = 225;

    if (rect) {
      this.dropdownElement = this.viewContainerRef.createEmbeddedView(
        this.dropdownTemplate
      );

      document.body.appendChild(this.dropdownElement.rootNodes[0]);
      const selectList = this.dropdownElement.rootNodes[0];

      let topPosition = rect.bottom;
      if (windowHeight - rect.bottom < dropdownHeight + 10) {
        topPosition = rect.top - dropdownHeight - 6;
        this.isRotate = true;
        selectList.style.setProperty('transform', 'rotate(180deg)');
      } else {
        selectList.style.setProperty('transform', 'rotate(0deg)');
      }
      selectList.style.setProperty('position', 'fixed');
      selectList.style.setProperty('top', topPosition + 3 + 'px');
      selectList.style.setProperty('left', rect.left + 'px');
      selectList.style.setProperty('height', '100%');
      selectList.style.setProperty('max-height', '225px');
      selectList.style.setProperty('width', rect.width + 'px');
      selectList.style.setProperty('z-index', 999);
    }
  }

  public destroyDropDown() {
    if (document.body.contains(this.dropdownElement?.rootNodes?.[0])) {
      document.body.removeChild(this.dropdownElement.rootNodes[0]);
    }
  }

  public ngOnDestroy(): void {
    this.destroyDropDown();
  }

  onChange = (item: any) => {
    if (item.length) {
      this.error = false;
      this.success = true;
    } else {
      this.error = true;
      this.success = false;
    }
  };
  onTouch = () => {};

  writeValue(obj: any): void {
    this.selectetOptions = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
