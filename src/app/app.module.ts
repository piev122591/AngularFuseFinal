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
import { AuthService } from "./core/guard/auth.service";
import { LoggedInAuthService } from "./core/guard/logged-in-auth.service";
import { LoginService } from "./login/service/login.service";
import { UserService } from "./shared/service/user.service";
const appRoutes: Routes = [
    {
        path: "login",
        canActivate: [LoggedInAuthService],
        loadChildren: () =>
            import("./login/login.module").then((m) => m.LoginModule),
    },

    // home route protected by auth guard
    {
        path: "",
        canActivate: [AuthService],
        loadChildren: () =>
            import("./main/sample/sample.module").then((m) => m.SampleModule),
    },

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
    ],
    bootstrap: [AppComponent],
    exports: [RouterModule],
    providers: [AuthService, LoggedInAuthService, LoginService, UserService],
})
export class AppModule {}
