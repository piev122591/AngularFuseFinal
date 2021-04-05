import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
    constructor(private router: Router) {}
    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot
    ): boolean {
        if (this.loggedIn()) {
            return true;
        }
        this.router.navigate(["/login"]);
        return false;
    }

    loggedIn() {
        return false;
    }
}
