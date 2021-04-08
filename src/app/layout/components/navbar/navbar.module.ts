import { NgModule } from "@angular/core";
import { FuseSharedModule } from "@fuse/shared.module";
import { NavbarComponent } from "app/layout/components/navbar/navbar.component";
import { NavbarVerticalStyle1Module } from "app/layout/components/navbar/vertical/style-1/style-1.module";
import { UserService } from "../../../shared/service/user.service";

@NgModule({
    declarations: [NavbarComponent],
    imports: [FuseSharedModule, NavbarVerticalStyle1Module],
    exports: [NavbarComponent],
    providers: [UserService],
})
export class NavbarModule {}
