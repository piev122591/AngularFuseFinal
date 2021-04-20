import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingRoutes } from "./admin-routing.routing";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AdminAssetsComponent } from "./admin-assets/admin-assets.component";
import { AdminChargesComponent } from "./admin-charges/admin-charges.component";
import { AssetsViewComponent } from "./admin-assets/assets-view/assets-view.component";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { FuseSharedModule } from "@fuse/shared.module";
import { MatChipsModule } from "@angular/material/chips";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { DashboardViewComponent } from "./admin-dashboard/dashboard-view/dashboard-view.component";
import { ChargesViewComponent } from "./admin-charges/charges-view/charges-view.component";
import { AdminVendorsComponent } from "./admin-vendors/admin-vendors.component";
import { VendorsViewComponent } from "./admin-vendors/vendors-view/vendors-view.component";
import { AdminPaymentsComponent } from "./admin-payments/admin-payments.component";
import { PaymentsViewComponent } from "./admin-payments/payments-view/payments-view.component";
import { AdminServicesComponent } from "./admin-services/admin-services.component";
import { ServicesViewComponent } from "./admin-services/services-view/services-view.component";
import { UsersViewComponent } from "./admin-users/users-view/users-view.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { WirelessViewComponent } from "./admin-wireless/wireless-view/wireless-view.component";
import { AdminWirelessComponent } from "./admin-wireless/admin-wireless.component";
import { PlansViewComponent } from "./admin-plans/plans-view/plans-view.component";
import { AdminPlansComponent } from "./admin-plans/admin-plans.component";
import { CompaniesViewComponent } from "./admin-companies/companies-view/companies-view.component";
import { AdminCompaniesComponent } from "./admin-companies/admin-companies.component";
import { EdiViewComponent } from "./admin-edi/edi-view/edi-view.component";
import { AdminEdiComponent } from "./admin-edi/admin-edi.component";
import { NewCompanyComponent } from "./admin-companies/new-company/new-company.component";
import { MatStepperModule } from "@angular/material/stepper";
import { NewCompanyViewComponent } from "./admin-companies/new-company/new-company-view/new-company-view.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CompanyService } from "./admin-companies/service/company.service";
import { CompanyResolverService } from "./admin-companies/service/company-resolver.service";
import { EditCompanyComponent } from "./admin-companies/edit-company/edit-company.component";
import { EditCompanyViewComponent } from "./admin-companies/edit-company/edit-company-view/edit-company-view.component";
import { NewVendorsComponent } from './admin-vendors/new-vendors/new-vendors.component';
import { NewVendorsViewComponent } from './admin-vendors/new-vendors/new-vendors-view/new-vendors-view.component';
import { EditVendorsComponent } from './admin-vendors/edit-vendors/edit-vendors.component';
import { EditVendorsViewComponent } from './admin-vendors/edit-vendors/edit-vendors-view/edit-vendors-view.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingRoutes,
        MatButtonModule,
        MatIconModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTableModule,
        MatFormFieldModule,
        MatStepperModule,
        MatCheckboxModule,
        MatIconModule,
        FuseSharedModule,
        MatSlideToggleModule,
        MatGridListModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        DashboardViewComponent,
        AdminAssetsComponent,
        AssetsViewComponent,
        AdminChargesComponent,
        ChargesViewComponent,
        AdminVendorsComponent,
        VendorsViewComponent,
        AdminPaymentsComponent,
        PaymentsViewComponent,
        AdminServicesComponent,
        ServicesViewComponent,
        AdminUsersComponent,
        UsersViewComponent,
        WirelessViewComponent,
        AdminWirelessComponent,
        PlansViewComponent,
        AdminPlansComponent,
        CompaniesViewComponent,
        AdminCompaniesComponent,
        EdiViewComponent,
        AdminEdiComponent,
        NewCompanyComponent,
        NewCompanyViewComponent,
        EditCompanyComponent,
        EditCompanyViewComponent,
        NewVendorsComponent,
        NewVendorsViewComponent,
        EditVendorsComponent,
        EditVendorsViewComponent,
      
    ],
    exports: [RouterModule],
    providers: [CompanyService, CompanyResolverService],
})
export class AdminModule {}
