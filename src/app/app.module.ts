import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
} from "@fuse/components";
import { fuseConfig } from "app/fuse-config";
import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { SampleModule } from "app/main/sample/sample.module";
import { LoginModule } from "./login/login.module";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./core/guard/auth.service";
import { SampleComponent } from "./main/sample/sample.component";
import { LoggedInAuthService } from "./core/guard/logged-in-auth.service";

const appRoutes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate: [LoggedInAuthService],
    },

    // home route protected by auth guard
    { path: "", component: SampleComponent, canActivate: [AuthService] },

    // otherwise redirect to home
    { path: "**", redirectTo: "" },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: "legacy" }),
        TranslateModule.forRoot(),
        // Material moment date module
        MatMomentDateModule,
        // Material
        MatButtonModule,
        MatIconModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        // App modules
        LayoutModule,
        SampleModule,
        LoginModule,
    ],
    bootstrap: [AppComponent],
    providers: [AuthService, LoggedInAuthService],
})
export class AppModule {}
