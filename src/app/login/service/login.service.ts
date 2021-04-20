import { Injectable } from "@angular/core";
import { Observable, of, Subject, BehaviorSubject } from "rxjs";
import {
    map,
    shareReplay,
    switchMap,
    distinctUntilChanged,
} from "rxjs/operators";
import { LoginData, LoginResult, User } from "../model/login.model";
import { Router } from "@angular/router";
import { logindata } from "../data/login";
import { UserService } from "../../shared/service/user.service";

@Injectable({ providedIn: "root" })
export class LoginService {
    private loginStatus = new BehaviorSubject<LoginResult>({});
    loginStatus$ = this.loginStatus.asObservable().pipe(
        distinctUntilChanged(),
        map((user): boolean => {
            user = {
                response: true,
                data: logindata[0],
            };
            if (user.response) {
                this.userService.setCurrentUser(user.data);
            }
            return user.response;
        })
    );
    private loginSubject = new Subject<LoginData>();
    login$ = this.loginSubject.asObservable().pipe(
        switchMap(
            (loginData): Observable<LoginResult> => this.checkLogin(loginData)
        ),
        map(
            (user): LoginResult => {
                if (user.response) {
                    this.router.navigate(["/admin", "dashboard"]);
                }
                this.loginStatus.next(user);
                return user;
            }
        ),
        shareReplay(1)
    );
    constructor(private router: Router, private userService: UserService) {}

    submitLogin(data: LoginData): void {
        this.loginSubject.next(data);
    }

    private checkLogin(data: LoginData): Observable<LoginResult> {
        const user: User[] = logindata.filter(
            (value): boolean => value.Email === data.email
        );
        if (user.length !== 0 && data.password === "1234") {
            return of({
                data: user[0],
                response: true,
                responseText: "Valid Login",
            });
        }
        return of({
            response: false,
            responseText: "Invalid Login",
        });
    }
}
