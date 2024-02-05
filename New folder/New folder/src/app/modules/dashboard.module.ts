import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { ApplicationportfoliomakerComponent } from './master/application/applicationportfoliomaker/applicationportfoliomaker.component';
import { AccesscontrolComponent } from './master/application/accesscontrol/accesscontrol.component';
import { AuthorizersmakerComponent } from './master/application/authorizersmaker/authorizersmaker.component';
import { ApplicationportfoliolistComponent } from './master/application/applicationportfoliolist/applicationportfoliolist.component';
import { ExceptionapprovermasterComponent } from './master/application/exceptionapprovermaster/exceptionapprovermaster.component';
import { ApplicationdlmasterComponent } from './master/application/applicationdlmaster/applicationdlmaster.component';
import { InfratypeofidmasterComponent } from './master/infra/infratypeofidmaster/infratypeofidmaster.component';
import { InfraroleComponent } from './master/infra/infrarole/infrarole.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { CommenPopupComponent } from '../components/common-popup/common-popup.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { SpinnerService } from '../components/spinner/spinner.service';
import { CommenPopupService } from '../components/common-popup/common-popup.service';
import { ApplicationcontrolmatrixComponent } from './master/application/applicationcontrolmatrix/applicationcontrolmatrix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { VendorbulkuploadComponent } from './master/application/vendorbulkupload/vendorbulkupload.component';
import { OtherentimentownermappingComponent } from './master/application/otherentimentownermapping/otherentimentownermapping.component';
import { CommonModalComponent } from '../components/common-modal/common-modal.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationportfoliomakerComponent,
    AccesscontrolComponent,
    AuthorizersmakerComponent,
    ApplicationportfoliolistComponent,
    ExceptionapprovermasterComponent,
    ApplicationdlmasterComponent,
    InfratypeofidmasterComponent,
    InfraroleComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    CommenPopupComponent,
    SpinnerComponent,
    ApplicationcontrolmatrixComponent,
    VendorbulkuploadComponent,
    OtherentimentownermappingComponent,
    CommonModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [SpinnerService,CommenPopupService],
})
export class DashboardModule { }
