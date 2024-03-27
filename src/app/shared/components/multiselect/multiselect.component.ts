import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  forwardRef,
} from '@angular/core';
import { collapse } from '../../animations/animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let uuid = 0;
@Component({
  selector: 'gb-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss'],
  animations: [collapse],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiselectComponent),
      multi: true,
    },
  ],
})
export class MultiselectComponent implements OnDestroy, OnInit, ControlValueAccessor {
  @Input() data: any[] = [];
  @Input() placeholder: string = '';
  @Input() isCurrencyIcon: boolean = false;
  @Input() keyName: string = 'id';
  @Input() error: boolean = false;
  @Input() singleSelect: boolean = false;
  @Input() closeOtherDropDowns: boolean = true;
  @Input() cutSide: 'left' | 'right' | 'both' | 'squad-small' | 'round' =
    'left';
  @Output() onSelect: EventEmitter<{ options: any[]; option: any }> =
    new EventEmitter();

  @ViewChild('multiselect') multiselect!: ElementRef<any>;
  @ViewChild('dropdownTemplate') dropdownTemplate!: TemplateRef<any>;
  @ViewChild('dropdown') dropdown!: ElementRef<any>;

  private dropdownElement: any;
  public isOpen: boolean = false;
  public isShowIcon: boolean = false;
  public isRotate: boolean = false;

  public selectetOptions: any[] = [];
  public disabled: boolean = false;
  public uniqId: string = this.getUniqueId();

  public ngOnInit(): void {
    this.isShowIcon = this.isCurrencyIcon ? true : false;
  }

  public getUniqueId() {
    return `gb-multiselect-${uuid++}`;
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
      const rect = this.multiselect.nativeElement.getBoundingClientRect();
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

  @HostListener('document:touchmove', ['$event'])
  @HostListener('document:click', ['$event'])
  public closeDropdown(event: Event) {
    const multiselectRef = this.multiselect?.nativeElement;
    if (!multiselectRef?.contains(event.target)) {
      this.isOpen = false;
      setTimeout(() => this.destroyDropDown(), 100);
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
    this.isShowIcon =
      this.isCurrencyIcon && this.selectetOptions.length === 0 ? true : false;
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
    const rect = this.multiselect.nativeElement.getBoundingClientRect();
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

  onChange = (item: any) => {};
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
