import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IActions } from 'src/app/shared/interfaces/IActions';
import { ActionsService } from 'src/app/shared/services/actions.service';

@Component({
  selector: 'gb-mobile-actions',
  templateUrl: './mobile-actions.component.html',
  styleUrls: ['./mobile-actions.component.scss'],
})
export class MobileActionsComponent {
  @Input() public actionsCount: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private actionService: ActionsService
  ) {}

  public actionMobileTopButtons: IActions[] = [];
  public actionMobileBottomButtons: IActions[] = [];
  public leftSideBtnClipPath: string =
    'polygon(0% 1.411%,0% 1.411%,0.128% 1.067%,0.488% 0.765%,1.04% 0.509%,1.748% 0.304%,2.572% 0.157%,3.475% 0.071%,4.419% 0.052%,5.365% 0.106%,6.276% 0.237%,7.113% 0.451%,98.78% 30.332%,98.78% 30.332%,99.004% 30.411%,99.207% 30.495%,99.388% 30.584%,99.547% 30.677%,99.683% 30.773%,99.795% 30.872%,99.884% 30.974%,99.948% 31.079%,99.987% 31.185%,100% 31.293%,100% 98.642%,100% 98.642%,99.945% 98.862%,99.788% 99.071%,99.535% 99.266%,99.196% 99.444%,98.78% 99.602%,98.294% 99.738%,97.748% 99.848%,97.15% 99.931%,96.509% 99.982%,95.833% 100%,4.167% 100%,4.167% 100%,3.491% 99.982%,2.85% 99.931%,2.252% 99.848%,1.706% 99.738%,1.22% 99.602%,0.804% 99.444%,0.465% 99.266%,0.212% 99.071%,0.055% 98.862%,0% 98.642%,0% 1.411%)';
  public topLeftSideBtnClipPath: string =
    'polygon(0% 96.934%,0% 96.934%,0.266% 97.683%,1.01% 98.338%,2.15% 98.889%,3.607% 99.325%,5.299% 99.634%,7.145% 99.806%,9.065% 99.829%,10.977% 99.694%,12.802% 99.388%,14.457% 98.9%,97.79% 67.499%,97.79% 67.499%,98.197% 67.334%,98.565% 67.159%,98.894% 66.976%,99.182% 66.786%,99.428% 66.589%,99.631% 66.386%,99.791% 66.178%,99.907% 65.966%,99.976% 65.751%,100% 65.533%,100% 2.899%,100% 2.899%,99.891% 2.428%,99.575% 1.982%,99.07% 1.567%,98.392% 1.187%,97.559% 0.849%,96.588% 0.559%,95.496% 0.324%,94.301% 0.148%,93.018% 0.038%,91.667% 0%,8.333% 0%,8.333% 0%,6.982% 0.038%,5.699% 0.148%,4.504% 0.324%,3.412% 0.559%,2.441% 0.849%,1.608% 1.187%,0.93% 1.567%,0.425% 1.982%,0.109% 2.428%,0% 2.899%,0% 96.934%)';
  public rightSideBtnClipPath: string =
    'polygon(0% 31.293%,0% 31.293%,0.013% 31.185%,0.052% 31.079%,0.116% 30.974%,0.205% 30.872%,0.317% 30.773%,0.453% 30.677%,0.612% 30.584%,0.793% 30.495%,0.996% 30.411%,1.22% 30.332%,92.887% 0.451%,92.887% 0.451%,93.724% 0.237%,94.635% 0.106%,95.581% 0.052%,96.525% 0.071%,97.428% 0.157%,98.252% 0.304%,98.96% 0.509%,99.512% 0.765%,99.872% 1.067%,100% 1.411%,100% 98.642%,100% 98.642%,99.945% 98.862%,99.788% 99.071%,99.535% 99.266%,99.196% 99.444%,98.78% 99.602%,98.294% 99.738%,97.748% 99.848%,97.15% 99.931%,96.509% 99.982%,95.833% 100%,4.167% 100%,4.167% 100%,3.491% 99.982%,2.85% 99.931%,2.252% 99.848%,1.706% 99.738%,1.22% 99.602%,0.804% 99.444%,0.465% 99.266%,0.212% 99.071%,0.055% 98.862%,0% 98.642%,0% 31.293%)';
  public topRightSideBtnClipPath: string =
    'polygon(0% 65.551%,0% 65.551%,0.023% 65.765%,0.093% 65.978%,0.207% 66.187%,0.366% 66.392%,0.568% 66.592%,0.813% 66.787%,1.099% 66.975%,1.425% 67.157%,1.792% 67.33%,2.197% 67.495%,85.176% 98.762%,85.176% 98.762%,86.86% 99.258%,88.723% 99.57%,90.681% 99.712%,92.651% 99.692%,94.547% 99.523%,96.286% 99.216%,97.785% 98.78%,98.96% 98.228%,99.726% 97.571%,100% 96.818%,100% 2.899%,100% 2.899%,99.889% 2.428%,99.566% 1.982%,99.05% 1.567%,98.358% 1.187%,97.507% 0.849%,96.516% 0.559%,95.401% 0.324%,94.179% 0.148%,92.87% 0.038%,91.489% 0%,8.511% 0%,8.511% 0%,7.13% 0.038%,5.821% 0.148%,4.6% 0.324%,3.484% 0.559%,2.493% 0.849%,1.642% 1.187%,0.95% 1.567%,0.434% 1.982%,0.111% 2.428%,0% 2.899%,0% 65.551% )';
  public middleSideBtnClipPath: string =
    'polygon( 0% 1.804%,0% 1.804%,0.121% 1.392%,0.46% 1.028%,0.982% 0.719%,1.651% 0.471%,2.432% 0.29%,3.289% 0.183%,4.187% 0.156%,5.09% 0.216%,5.963% 0.367%,6.77% 0.617%,47.23% 16.601%,47.23% 16.601%,47.719% 16.766%,48.252% 16.895%,48.817% 16.986%,49.403% 17.041%,50% 17.06%,50.597% 17.041%,51.183% 16.986%,51.748% 16.895%,52.281% 16.766%,52.77% 16.601%,93.23% 0.617%,93.23% 0.617%,94.037% 0.367%,94.91% 0.216%,95.814% 0.156%,96.711% 0.183%,97.568% 0.29%,98.349% 0.471%,99.018% 0.719%,99.54% 1.028%,99.879% 1.392%,100% 1.804%,100% 98.354%,100% 98.354%,99.948% 98.621%,99.796% 98.874%,99.554% 99.11%,99.228% 99.326%,98.828% 99.518%,98.362% 99.682%,97.838% 99.816%,97.264% 99.916%,96.649% 99.978%,96% 100%,4% 100%,4% 100%,3.351% 99.978%,2.736% 99.916%,2.162% 99.816%,1.638% 99.682%,1.172% 99.518%,0.772% 99.326%,0.446% 99.11%,0.204% 98.874%,0.052% 98.621%,0% 98.354%,0% 1.804%)';
  public topMiddleSideBtnClipPath: string = 'inset(0% 0% 0% 0% round 10px)';

  public ngOnInit(): void {
    this.fetchActionButtons();
  }

  public fetchActionButtons() {
    switch (this.actionsCount) {
      case 4:
        this.actionMobileTopButtons = [
          {
            title: 'sport in - play',
            clipPath: this.topLeftSideBtnClipPath,
            color: '#04A592',
            class: 'mobile',
            type: 'sports-book',
            value: 'in-play',
          },
          {
            title: 'sport pre - match',
            clipPath: this.topRightSideBtnClipPath,
            color: '#04A561',
            class: 'mobile',
            type: 'sports-book',
            value: 'pre-match',
          },
        ];
        this.actionMobileBottomButtons = [
          {
            title: 'live - dealer',
            clipPath: this.leftSideBtnClipPath,
            color: '#EC33C5',
            class: 'mobile',
            type: 'casino-games',
            value: 'live-dealer',
          },
          {
            title: 'casino games',
            clipPath: this.rightSideBtnClipPath,
            color: '#F82B99',
            class: 'mobile',
            type: 'casino-games',
            value: 'slots',
          },
        ];
        break;
      case 3:
        this.actionMobileTopButtons = [
          {
            title: 'sport in - play',
            clipPath: this.topLeftSideBtnClipPath,
            color: '#04A592',
            class: 'mobile',
            type: 'sports-book',
            value: 'in-play',
          },
          {
            title: 'live - dealer',
            clipPath: this.topRightSideBtnClipPath,
            color: '#EC33C5',
            class: 'mobile',
            type: 'casino-games',
            value: 'live-dealer',
          },
        ];
        this.actionMobileBottomButtons = [
          {
            title: 'casino games',
            clipPath: this.middleSideBtnClipPath,
            color: '#F82B99',
            class: 'short',
            type: 'casino-games',
            value: 'slots',
          },
        ];
        break;
      case 2:
        this.actionMobileTopButtons = [
          {
            title: 'sport in - play',
            clipPath: this.topMiddleSideBtnClipPath,
            color: '#04A592',
            class: 'short',
            type: 'sports-book',
            value: 'in-play',
          },
        ];
        this.actionMobileBottomButtons = [
          {
            title: 'live - dealer',
            clipPath: this.middleSideBtnClipPath,
            color: '#EC33C5',
            class: 'short',
            type: 'casino-games',
            value: 'live-dealer',
          },
        ];
        break;
    }
  }

  public onAction(action: any, event: Event) {
    const target = (event.target as HTMLElement).closest('.cover');
    if (target) {
      target.classList.add('active');
      setTimeout(() => {
        this.actionService.setData(action);
        this.router.navigate(['../home'], { relativeTo: this.activatedRoute });
      }, 500);
    }
  }
}
