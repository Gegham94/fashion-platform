import { Component } from '@angular/core';

@Component({
  selector: 'gb-mobile-rules-and-regulations',
  templateUrl: './mobile-rules-and-regulations.component.html',
  styleUrl: './mobile-rules-and-regulations.component.scss',
})
export class MobileRulesAndRegulationsComponent {
  public isLoading = false;

  public tableData: any[] = [
    {
      no: 1,
      data: '2024-02-16',
      event: 'Team1',
      one: 1.5,
      x: 3.0,
      two: 2.5,
      oneX: 1.75,
      twelve: 3.0,
      twoX: 2.0,
      handicap1: -1,
      coefficient1: 1.95,
      handicap2: 1,
      coefficient2: 2.05,
      total: 2.5,
      over: 1.85,
      under: 1.85,
    },
  ];

  columns: any[] = [
    { header: 'No', field: 'no' },
    { header: 'Data', field: 'data' },
    { header: 'Event', field: 'event' },
    { header: '1', field: 'one' },
    { header: 'x', field: 'x' },
    { header: '2', field: 'two' },
    { header: '1x', field: 'oneX' },
    { header: '12', field: 'twelve' },
    { header: '2x', field: 'twoX' },
    { header: 'Handicap1', field: 'handicap1' },
    { header: 'Coefficient', field: 'coefficient1' },
    { header: 'Handicap2', field: 'handicap2' },
    { header: 'Coefficient', field: 'coefficient2' },
    { header: 'Total', field: 'total' },
    { header: 'Over', field: 'over' },
    { header: 'Under', field: 'under' },
  ];

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
