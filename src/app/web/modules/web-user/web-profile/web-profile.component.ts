import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserInfo } from 'src/app/shared/interfaces/IUserInfo';
import { UserInfoService } from 'src/app/shared/services/user-info.service';

@Component({
  selector: 'app-web-profile',
  templateUrl: './web-profile.component.html',
  styleUrls: ['./web-profile.component.scss'],
})
export class WebProfileComponent implements OnInit {
  // @ViewChild('iframeRef') iframeRef!: ElementRef<any>;
  // public sendDataToParent() {
  //   this.iframeRef.nativeElement.contentWindow.postMessage(
  //     { id: 1 },
  //     'http://192.168.0.143:4200/recommendedSportEvents'
  //   );
  // }
  public isLoading = false;
  public userData!: IUserInfo;

  constructor(private userInfoService: UserInfoService, private router: Router) {}

  public ngOnInit(): void {
    // this.router.navigate(['1/about']);
    this.showLoader();
    this.userInfoService.getUserInfo().subscribe((data) => {
      this.userData = data;
    });
  }

  public showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
