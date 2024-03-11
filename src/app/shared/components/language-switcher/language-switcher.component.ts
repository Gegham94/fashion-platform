import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { TYPE_LANGUAGES, LANGUAGES } from '../../constants/languages';
import { collapse } from '../../animations/animations';
import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  animations: [collapse],
})
export class LanguageSwitcherComponent implements OnInit {
  @Input('borderGradient') borderGradient: boolean = false;
  @Input('cutSide') cutSide: 'left' | 'right' | 'both' | 'round' | 'squad' =
    'left';
  @Input('isMobile') isMobile: boolean = false;

  public LANGUAGES: TYPE_LANGUAGES[] = LANGUAGES;
  public selectedLang: TYPE_LANGUAGES = this.LANGUAGES[0];
  public showDropdown: boolean = false;

  constructor(private readonly translateService: TranslateService) {}

  @HostListener('document:click', ['$event'])
  public closeDropdown() {
    this.showDropdown = false;
  }

  public ngOnInit() {
    const lang = localStorage.getItem('lang');
    const language = this.LANGUAGES.find(
      (languageRes) => languageRes.short === lang
    );
    if (language) {
      this.LANGUAGES.forEach((item) => {
        item.isActive = item === language;
      });
      this.selectedLang = language;
    };
  }

  public toggleDropdown(event: any) {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  public changeLanguage(selectedItem: TYPE_LANGUAGES) {
    localStorage.setItem('lang', selectedItem.short);
    this.translateService.use(selectedItem.short);
    this.LANGUAGES.forEach((item) => {
      item.isActive = item === selectedItem;
    });
    this.selectedLang = selectedItem;
    this.showDropdown = false;
  }
}
