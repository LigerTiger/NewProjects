import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ApplicationdlmasterComponent } from './master/application/applicationdlmaster/applicationdlmaster.component';
import { ApplicationportfoliomakerComponent } from './master/application/applicationportfoliomaker/applicationportfoliomaker.component';
import { ApplicationportfoliolistComponent } from './master/application/applicationportfoliolist/applicationportfoliolist.component';
import { ApplicationcontrolmatrixComponent } from './master/application/applicationcontrolmatrix/applicationcontrolmatrix.component';
import { VendorbulkuploadComponent } from './master/application/vendorbulkupload/vendorbulkupload.component';
import { OtherentimentownermappingComponent } from './master/application/otherentimentownermapping/otherentimentownermapping.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', 
        pathMatch: 'full', 
        component: ApplicationportfoliomakerComponent,
      },
      {
        path: 'applicationdlmaster',
        component: ApplicationdlmasterComponent,
      },
      {
        path: 'applicationportfoliomaker',
        component: ApplicationportfoliomakerComponent,
      },
      {
        path: 'applicationportfoliolist',
        component: ApplicationportfoliolistComponent,
      },
      {
        path: 'applicationcontrolmatrix',
        component: ApplicationcontrolmatrixComponent,
      },      {
        path: 'vendorBulkUpload',
        component: VendorbulkuploadComponent,
      },
      {
        path: 'OtherentimentownermappingComponent',
        component: OtherentimentownermappingComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];


@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],

})
export class DashboardRoutingModule { }
