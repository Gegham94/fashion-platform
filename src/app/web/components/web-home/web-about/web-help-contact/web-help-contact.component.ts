import { Component } from '@angular/core';
import { AboutHelpTabs } from 'src/app/shared/constants/about-help';

@Component({
  selector: 'gb-web-help-contact',
  templateUrl: './web-help-contact.component.html',
  styleUrl: './web-help-contact.component.scss'
})
export class WebHelpContactComponent {
  public helpType = AboutHelpTabs;
  
  public ngOnInit(): void {
    this.helpType[0].isActive = true;
  }
  public ngOnDestroy(): void {
    this.helpType.forEach((tab) => (tab.isActive = false));
  }

  public selectHelpType(tabId: number) {
    this.helpType.forEach((tab) => (tab.isActive = false));
    this.helpType[tabId].isActive = true;
  }
}
