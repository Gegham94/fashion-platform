import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileHelpContactComponent } from './mobile-help-contact.component';

const routes: Routes = [
  {
    path: '',
    component: MobileHelpContactComponent,
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
export class MobileHelpContactRoutingModule {}
