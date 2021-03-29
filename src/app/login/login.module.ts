import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginViewComponent } from "./login-view/login-view.component";

@NgModule({
    imports: [CommonModule],
    declarations: [LoginComponent, LoginViewComponent],
})
export class LoginModule {}
