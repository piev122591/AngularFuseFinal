import { Routes, RouterModule } from "@angular/router";
import { AuthService } from "app/core/guard/auth.service";
import { ClientDashboardComponent } from "./client-dashboard/client-dashboard.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
        canActivate: [AuthService],
    },
    {
        path: ":id",
        redirectTo: "dashboard",
        pathMatch: "full",
        canActivate: [AuthService],
    },
    {
        path: ":id/dashboard",
        component: ClientDashboardComponent,
        canActivate: [AuthService],
    },
];

export const ClientRoutingRoutes = RouterModule.forChild(routes);
