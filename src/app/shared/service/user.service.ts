import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { FuseNavigation } from "../../../@fuse/types/fuse-navigation";
import { User, Company } from "../../login/model/login.model";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class UserService {
    private userSubject = new BehaviorSubject<User>(new User());

    constructor() {}
    setCurrentUser(user: User): void {
        console.log("set", user);
        return this.userSubject.next(user);
    }
    getCurrentUser(): Observable<User> {
        return this.userSubject.asObservable().pipe(
            map(
                (user): User => {
                    console.log("current", user);
                    return user;
                }
            )
        );
    }

    getNavigation(): Observable<FuseNavigation[]> {
        return this.getCurrentUser().pipe(
            map((user): FuseNavigation[] => user.Navigation)
        );
    }
    getCompany(): Observable<Company[]> {
        return this.getCurrentUser().pipe(
            map((user): Company[] => user.CompanyList)
        );
    }
}
