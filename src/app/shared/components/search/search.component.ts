import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'gb-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @ViewChild('searchRef') searchRef!: ElementRef;
  @Output() getSearchedText = new EventEmitter<any>();

  public searchFilter(): void {
    const serchValue = this.searchRef.nativeElement.value;
    if (serchValue) {
      this.getSearchedText.emit(serchValue.trim());
    }
  }

  public onEnterKey(): void {
    this.searchFilter();
  }
}
