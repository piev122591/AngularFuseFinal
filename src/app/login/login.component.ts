import { Component, OnInit } from "@angular/core";
import { LoginService } from "./service/login.service";
import { LoginData } from "./model/login.model";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    login$ = this.loginService.login$;
    constructor(private loginService: LoginService) {}

    ngOnInit() {}
    loginEvent(event: LoginData): void {
        console.log(event);
        this.loginService.submitLogin(event);
    }
}
