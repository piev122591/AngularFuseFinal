import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FuseSharedModule } from "@fuse/shared.module";

import { SampleComponent } from "./sample.component";
import { AuthService } from "app/core/guard/auth.service";
import { CompanyComponent } from "../company/company.component";
import { CompanyViewComponent } from "../company/company-view/company-view.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
    {
        path: "",
        redirectTo: "admin",
        pathMatch: "full",
    },
    {
        path: "admin",
        canActivate: [AuthService],
        loadChildren: () =>
            import("../admin/admin.module").then((m) => m.AdminModule),
    },
    {
        path: "client",
        canActivate: [AuthService],
        loadChildren: () =>
            import("../client/client.module").then((m) => m.ClientModule),
    },
];

@NgModule({
    declarations: [SampleComponent, CompanyComponent, CompanyViewComponent],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        FuseSharedModule,
        MatButtonModule,
        MatIconModule,
    ],
    exports: [
        SampleComponent,
        CompanyComponent,
        CompanyViewComponent,
        RouterModule,
    ],
})
export class SampleModule {}
