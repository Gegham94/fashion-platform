import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { collapse } from '../../animations/animations';
import { CURRENCY, TYPE_FILTER } from '../../constants/contstants';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  animations: [collapse],
})
export class DropdownComponent implements OnInit {
  @Input('dropdownButtonType') dropdownButtonType: string = '';
  @Input('borderGradient') borderGradient: boolean = false;
  @Input('cutSide') cutSide: 'left' | 'right' | 'both' | 'round' | 'squad' = 'left';
  @Input('disableKey_All') disableKey_All: boolean = false;
  @Output() emitedItem = new EventEmitter<any>();

  public OPTIONS: TYPE_FILTER[] = CURRENCY;
  public selectedOption: TYPE_FILTER = this.OPTIONS[0];
  public showDropdown: boolean = false;

  @HostListener('document:click', ['$event'])
  public closeDropdown() {
    this.showDropdown = false;
  }

  public ngOnInit() {
    if (this.disableKey_All) {
      this.OPTIONS = this.OPTIONS.filter((item) => item.name !== 'All');
    }
    this.selectedOption = this.OPTIONS[0];
    this.emitedItem.emit(this.selectedOption);
  }

  public toggleDropdown(event: Event) {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  public setCurrentSelection(selectedItem: any) {
    this.selectedOption = selectedItem;
    this.showDropdown = false;
    this.emitedItem.emit(this.selectedOption);
  }
}
