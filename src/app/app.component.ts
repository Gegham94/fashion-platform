import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { EDeviceNumber } from './shared/constants/device-number';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Cinco.Front.FashionPlatform';

  constructor(
    private router: Router,
    private deviceDetectorService: DeviceDetectorService,
    private translateService: TranslateService,
  ) {}

  ngOnInit() {
    this.router.navigate([
      EDeviceNumber[this.deviceDetectorService.deviceType],
    ]);

    let defaultLanguage: string = this.getLang();

    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem("lang", event.lang);
    });
  }

  public getLang(): string {
    let lang: string = "";
    const storedLanguage = localStorage.getItem("lang");
    if (storedLanguage && ["am", "en", "br", "ca"].indexOf(storedLanguage) > -1) {
      lang = storedLanguage;
    } else if ( ["am", "en", "br", "ca"].indexOf(<string>this.translateService.getBrowserLang()) > -1) {
        lang = <string>this.translateService.getBrowserLang();
    } else {
      lang = "en";
      localStorage.setItem("lang", lang);
    }
    return lang;
  }
}
