import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebAboutComponent } from './web-about.component';

const routes: Routes = [
  {
    path: '',
    component: WebAboutComponent,
    children: [
      {
        path: "", pathMatch: "full", redirectTo: "about_us",
      },
      {
        path: "about_us",
        loadChildren: () => import("./web-about-us/web-about-us.module").then(m => m.WebAboutUsModule),
      },
      {
        path: "rules_and_regulations",
        loadChildren: () => import("./web-rules-and-regulations/web-rules-and-regulations.module").then(m => m.WebRulesAndRegulationsModule),
      },
      {
        path: "help",
        loadChildren: () => import("./web-help-contact/web-help-contact.module").then(m => m.WebHelpContactModule),
      },
      {
        path: "contact_us",
        loadChildren: () => import("./web-contact-us/web-contact-us.module").then(m => m.WebContactUsModule),
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebAboutRoutingModule {}
