import { Routes, RouterModule } from "@angular/router";
import { AuthService } from "app/core/guard/auth.service";
import { AdminAssetsComponent } from "./admin-assets/admin-assets.component";
import { AdminChargesComponent } from "./admin-charges/admin-charges.component";
import { AdminCompaniesComponent } from "./admin-companies/admin-companies.component";

import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminEdiComponent } from "./admin-edi/admin-edi.component";
import { AdminPaymentsComponent } from "./admin-payments/admin-payments.component";
import { AdminPlansComponent } from "./admin-plans/admin-plans.component";
import { AdminServicesComponent } from "./admin-services/admin-services.component";
import { AdminUsersComponent } from "./admin-users/admin-users.component";
import { AdminVendorsComponent } from "./admin-vendors/admin-vendors.component";
import { AdminWirelessComponent } from "./admin-wireless/admin-wireless.component";

import { AdminComponent } from "./admin.component";
import { NewCompanyComponent } from "./admin-companies/new-company/new-company.component";
import { CompanyResolverService } from "./admin-companies/service/company-resolver.service";
import { EditCompanyComponent } from "./admin-companies/edit-company/edit-company.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
        canActivate: [AuthService],
    },
    {
        path: "dashboard",
        component: AdminDashboardComponent,
        canActivate: [AuthService],
    },

    {
        path: "assets",
        component: AdminAssetsComponent,
        canActivate: [AuthService],
    },

    {
        path: "charges",
        component: AdminChargesComponent,
        canActivate: [AuthService],
    },

    {
        path: "companies",
        component: AdminCompaniesComponent,
        canActivate: [AuthService],
    },
    {
        path: "companies/new",
        component: NewCompanyComponent,
    },
    {
        path: "companies/:id/edit",
        component: EditCompanyComponent,
        resolve: {
            company: CompanyResolverService,
        },
    },

    {
        path: "edi",
        component: AdminEdiComponent,
        canActivate: [AuthService],
    },
    {
        path: "payments",
        component: AdminPaymentsComponent,
        canActivate: [AuthService],
    },
    {
        path: "plans",
        component: AdminPlansComponent,
        canActivate: [AuthService],
    },
    {
        path: "services",
        component: AdminServicesComponent,
        canActivate: [AuthService],
    },
    {
        path: "users",
        component: AdminUsersComponent,
        canActivate: [AuthService],
    },
    {
        path: "vendors",
        component: AdminVendorsComponent,
        canActivate: [AuthService],
    },
    {
        path: "wireless",
        component: AdminWirelessComponent,
        canActivate: [AuthService],
    },
];

export const AdminRoutingRoutes = RouterModule.forChild(routes);
