import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class LoggedInAuthService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): boolean {
        if (this.authService.loggedIn()) {
            this.router.navigate(["/admin"]);
            return false;
        } else {
            return true;
        }
    }
}
