import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileAboutComponent } from './mobile-about.component';

const routes: Routes = [
  {
    path: '',
    component: MobileAboutComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "about_us",
      },
      {
        path: "about_us",
        loadChildren: () => import("./mobile-about-us/mobile-about-us.module").then(m => m.MobileAboutUsModule),
      },
      {
        path: "rules_and_regulations",
        loadChildren: () => import("./mobile-rules-and-regulations/mobile-rules-and-regulations.module").then(m => m.MobileRulesAndRegulationsModule),
      },
      {
        path: "help",
        loadChildren: () => import("./mobile-help-contact/mobile-help-contact.module").then(m => m.WebHelpContactModule),
      },
      {
        path: "contact_us",
        loadChildren: () => import("./mobile-contact-us/mobile-contact-us.module").then(m => m.MobileContactUsModule),
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileAboutRoutingModule {}
