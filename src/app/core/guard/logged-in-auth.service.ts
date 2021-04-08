import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Injectable()
export class LoggedInAuthService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean | UrlTree> {
        // if (this.authService.loggedIn()) {
        //     this.router.navigate(["/admin"]);
        //     return false;
        // } else {
        //     return true;
        // }

        // return this.authService.loggedIn().pipe(
        //     map((isLoggedIn): boolean | UrlTree => {
        //         if (isLoggedIn) {
        //             return this.router.parseUrl("/admin");
        //         }
        //         return true;
        //     })
        // );

        return this.authService
            .loggedIn()
            .pipe(
                map((isLoggedIn): boolean | UrlTree =>
                    isLoggedIn ? this.router.parseUrl("/admin/dashboard") : true
                )
            );
    }
}
