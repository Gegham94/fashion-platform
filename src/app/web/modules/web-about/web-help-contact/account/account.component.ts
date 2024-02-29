import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
})
export class AccountComponent implements OnInit {
  public infoList = [
    {
      title: 'How can I register an account ?',
      text: '“The moment you think of buying a Web Hosting Plan, you know one thing – So many choices, which one to choose? Whether you would want to choose Shared Linux Packages or a Unix Package or do you want to go for a shared windows package or packages reseller for hosting? Trust me, a lot of individuals stand confused when they see that there are thousands of plans yet very little resource of comparison.',
    },
    {
      title: 'What should I do if I have forgotten my password ?',
      text: 'Test text to help how to fix problems and get currect result us expected.',
    },
    {
      title: 'What should I do if I have forgotten my password ?',
      text: 'Test text to help how to fix problems and get currect result us expected.',
    },
    {
      title: 'What should I do if I have forgotten my password ?',
      text: 'Test text to help how to fix problems and get currect result us expected.',
    },
    {
      title: 'What should I do if I have forgotten my password ?',
      text: 'Test text to help how to fix problems and get currect result us expected.',
    },
    {
      title: 'What should I do if I have forgotten my password ?',
      text: 'Test text to help how to fix problems and get currect result us expected.',
    },
    {
      title: 'What should I do if I have forgotten my password ?',
      text: 'Test text to help how to fix problems and get currect result us expected.',
    },
  ];
  public isLoading = false;

  public ngOnInit(): void {
    this.showLoader();
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
