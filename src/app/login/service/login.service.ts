import { Injectable } from "@angular/core";
import { Observable, of, Subject, BehaviorSubject, merge } from "rxjs";
import { map, shareReplay, switchMap } from "rxjs/operators";
import { LoginData, LoginResult, User } from "../model/login.model";
import { Router } from "@angular/router";
import { logindata } from "../data/login";
import { UserService } from "../../shared/service/user.service";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";

@Injectable({ providedIn: "root" })
export class LoginService {
    private loginStatus = new BehaviorSubject<LoginResult>({});
    loginStatus$ = this.loginStatus.asObservable().pipe(
        map((user): boolean => {
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
    constructor(
        private router: Router,
        private userService: UserService,
        private companyChangeEventService: CompanyChangeEventService
    ) {}

    submitLogin(data: LoginData): void {
        this.loginSubject.next(data);
    }

    private checkLogin(data: LoginData): Observable<LoginResult> {
        return this.listenToCompanyChangeEvent().pipe(
            switchMap(
                (company): Observable<LoginResult> => {
                    let user: User[] = logindata.filter(
                        (value): boolean =>
                            value.Email === data.email &&
                            value.Role === company.role
                    );

                    if (user.length !== 0 && data.password === "1234") {
                        if (company.role === "client") {
                            user = user.filter(
                                (value): boolean =>
                                    value.Company.CompanyId ===
                                    company.companyId
                            );
                        }
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
            )
        );
    }
    private listenToCompanyChangeEvent(): Observable<{
        companyId?: number;
        role: string;
    }> {
        return merge(
            of({ companyId: undefined, role: "admin" }),
            this.companyChangeEventService.on<{
                companyId: number;
                role: string;
            }>()
        );
    }
}
