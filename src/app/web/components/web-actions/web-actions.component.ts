import { Component, Input } from '@angular/core';
import { IActions } from 'src/app/shared/interfaces/IActions';

@Component({
  selector: 'app-web-actions',
  templateUrl: './web-actions.component.html',
  styleUrls: ['./web-actions.component.scss'],
})
export class WebActionsComponent {
  @Input() public actionsCount: number = 0;

  public actionButtons: IActions[] = [];
  public actionMobileTopButtons: IActions[] = [];
  public actionMobileBottomButtons: IActions[] = [];
  public leftSideBtnClipPath: string =
    'polygon(0% 1.411%,0% 1.411%,0.128% 1.067%,0.488% 0.765%,1.04% 0.509%,1.748% 0.304%,2.572% 0.157%,3.475% 0.071%,4.419% 0.052%,5.365% 0.106%,6.276% 0.237%,7.113% 0.451%,98.78% 30.332%,98.78% 30.332%,99.004% 30.411%,99.207% 30.495%,99.388% 30.584%,99.547% 30.677%,99.683% 30.773%,99.795% 30.872%,99.884% 30.974%,99.948% 31.079%,99.987% 31.185%,100% 31.293%,100% 98.642%,100% 98.642%,99.945% 98.862%,99.788% 99.071%,99.535% 99.266%,99.196% 99.444%,98.78% 99.602%,98.294% 99.738%,97.748% 99.848%,97.15% 99.931%,96.509% 99.982%,95.833% 100%,4.167% 100%,4.167% 100%,3.491% 99.982%,2.85% 99.931%,2.252% 99.848%,1.706% 99.738%,1.22% 99.602%,0.804% 99.444%,0.465% 99.266%,0.212% 99.071%,0.055% 98.862%,0% 98.642%,0% 1.411%)';
  public rightSideBtnClipPath: string =
    'polygon(0% 31.293%,0% 31.293%,0.013% 31.185%,0.052% 31.079%,0.116% 30.974%,0.205% 30.872%,0.317% 30.773%,0.453% 30.677%,0.612% 30.584%,0.793% 30.495%,0.996% 30.411%,1.22% 30.332%,92.887% 0.451%,92.887% 0.451%,93.724% 0.237%,94.635% 0.106%,95.581% 0.052%,96.525% 0.071%,97.428% 0.157%,98.252% 0.304%,98.96% 0.509%,99.512% 0.765%,99.872% 1.067%,100% 1.411%,100% 98.642%,100% 98.642%,99.945% 98.862%,99.788% 99.071%,99.535% 99.266%,99.196% 99.444%,98.78% 99.602%,98.294% 99.738%,97.748% 99.848%,97.15% 99.931%,96.509% 99.982%,95.833% 100%,4.167% 100%,4.167% 100%,3.491% 99.982%,2.85% 99.931%,2.252% 99.848%,1.706% 99.738%,1.22% 99.602%,0.804% 99.444%,0.465% 99.266%,0.212% 99.071%,0.055% 98.862%,0% 98.642%,0% 31.293%)';
  public middleSideBtnClipPath: string =
    'polygon( 0% 1.804%,0% 1.804%,0.121% 1.392%,0.46% 1.028%,0.982% 0.719%,1.651% 0.471%,2.432% 0.29%,3.289% 0.183%,4.187% 0.156%,5.09% 0.216%,5.963% 0.367%,6.77% 0.617%,47.23% 16.601%,47.23% 16.601%,47.719% 16.766%,48.252% 16.895%,48.817% 16.986%,49.403% 17.041%,50% 17.06%,50.597% 17.041%,51.183% 16.986%,51.748% 16.895%,52.281% 16.766%,52.77% 16.601%,93.23% 0.617%,93.23% 0.617%,94.037% 0.367%,94.91% 0.216%,95.814% 0.156%,96.711% 0.183%,97.568% 0.29%,98.349% 0.471%,99.018% 0.719%,99.54% 1.028%,99.879% 1.392%,100% 1.804%,100% 98.354%,100% 98.354%,99.948% 98.621%,99.796% 98.874%,99.554% 99.11%,99.228% 99.326%,98.828% 99.518%,98.362% 99.682%,97.838% 99.816%,97.264% 99.916%,96.649% 99.978%,96% 100%,4% 100%,4% 100%,3.351% 99.978%,2.736% 99.916%,2.162% 99.816%,1.638% 99.682%,1.172% 99.518%,0.772% 99.326%,0.446% 99.11%,0.204% 98.874%,0.052% 98.621%,0% 98.354%,0% 1.804%)';
  public topMiddleSideBtnClipPath: string = 'inset(0% 0% 0% 0% round 10px)';

  constructor() {}

  public ngOnInit(): void {
    this.fetchActionButtons();
  }

  public fetchActionButtons() {
    switch (this.actionsCount) {
      case 4:
        this.actionButtons = [
          {
            text: 'sport in - play',
            clipPath: this.leftSideBtnClipPath,
            color: '#04A592',
            class: 'big--4',
          },
          {
            text: 'sport pre - match',
            clipPath: this.leftSideBtnClipPath,
            color: '#04A561',
            class: 'small--4',
          },
          {
            text: 'live - dealer',
            clipPath: this.rightSideBtnClipPath,
            color: '#EC33C5',
            class: 'small--4',
          },
          {
            text: 'casino games',
            clipPath: this.rightSideBtnClipPath,
            color: '#F82B99',
            class: 'big--4',
          },
        ];
        break;
      case 3:
        this.actionButtons = [
          {
            text: 'sport in - play',
            clipPath: this.leftSideBtnClipPath,
            color: '#04A592',
            class: 'big--3',
          },
          {
            text: 'live - dealer',
            clipPath: this.middleSideBtnClipPath,
            color: '#EC33C5',
            class: 'small--3',
          },
          {
            text: 'casino games',
            clipPath: this.rightSideBtnClipPath,
            color: '#F82B99',
            class: 'big--3',
          },
        ];
        break;
      case 2:
        this.actionButtons = [
          {
            text: 'sport in - play',
            clipPath: this.leftSideBtnClipPath,
            color: '#04A592',
            class: 'small--2',
          },
          {
            text: 'live - dealer',
            clipPath: this.rightSideBtnClipPath,
            color: '#EC33C5',
            class: 'small--2',
          },
        ];
        break;
    }
  }
}
