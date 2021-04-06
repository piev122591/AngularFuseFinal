import { Injectable } from "@angular/core";
import { UserService } from "../../../shared/service/user.service";
import { Observable } from "rxjs";
import { Company } from "app/login/model/login.model";
import { Router } from "@angular/router";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";

@Injectable()
export class DashboardService {
    constructor(
        private userService: UserService,
        private router: Router,
        private companyChangeEventService: CompanyChangeEventService
    ) {}

    getUserCompany(): Observable<Company[]> {
        return this.userService.getCompany();
    }

    chooseCompany(company: Company): void {
        this.companyChangeEventService.fire({
            companyId: company.CompanyId,
            role: "client",
        });
        this.router.navigate(["/client", company.CompanyId, "dashboard"]);
    }
}
