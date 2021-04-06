import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingRoutes } from "./admin-routing.routing";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AdminAssetsComponent } from "./admin-assets/admin-assets.component";
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
        FuseSharedModule,
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        DashboardViewComponent,
        AdminAssetsComponent,
        AssetsViewComponent,
    ],
    exports: [RouterModule],
})
export class AdminModule {}
