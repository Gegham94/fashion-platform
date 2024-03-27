import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebHelpContactComponent } from './web-help-contact.component';

const routes: Routes = [
  {
    path: '',
    component: WebHelpContactComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "account",
      },
      {
        path: "account",
        loadChildren: () => import("./account/account.module").then(m => m.AccountModule),
      },
      {
        path: "payments",
        loadChildren: () => import("./payments/payments.module").then(m => m.PaymentsModule),
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebHelpContactRoutingModule {}
