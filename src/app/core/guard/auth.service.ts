import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from "@angular/router";
import { map } from "rxjs/operators";
import { LoginService } from "../../login/service/login.service";

@Injectable()
export class AuthService implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {}
    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> {
        console.log("params", _route.params);
        return this.loggedIn().pipe(
            map((isLoggedIn): boolean | UrlTree => {
                return isLoggedIn ? true : this.router.parseUrl("/login");
            })
        );
    }

    loggedIn(): Observable<boolean> {
        return this.loginService.loginStatus$;
    }
}
