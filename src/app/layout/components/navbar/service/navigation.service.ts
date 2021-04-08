import { Injectable } from "@angular/core";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FuseNavigation } from "@fuse/types";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";
import { merge, Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { company1, company2, company3, adminNav } from "./navigation.data";

@Injectable({
    providedIn: "root",
})
export class NavigationService {
    constructor(
        private fuseNavigationService: FuseNavigationService,
        private companyChangeEventService: CompanyChangeEventService
    ) {}

    defaultNav(): Observable<FuseNavigation[]> {
        return merge(
            of({ companyId: undefined }),
            this.companyChangeEventService.on<{
                companyId: number;
            }>()
        ).pipe(
            switchMap(
                (company): Observable<FuseNavigation[]> => {
                    return this.setDefaultNav(company.companyId).pipe(
                        switchMap(
                            (nav): Observable<FuseNavigation[]> => {
                                this.fuseNavigationService.unregister("main");
                                this.fuseNavigationService.register(
                                    "main",
                                    nav
                                );
                                this.fuseNavigationService.setCurrentNavigation(
                                    "main"
                                );
                                return of(nav);
                            }
                        )
                    );
                }
            )
        );
    }

    setDefaultNav(company: number): Observable<FuseNavigation[]> {
        if (company === 2) {
            return of(company2);
        }
        if (company === 3) {
            return of(company3);
        }
        if (company === 1) {
            return of(company1);
        }
        if (company === undefined) {
            return of(adminNav);
        }
    }
}
