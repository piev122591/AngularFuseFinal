import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";
import { CompanyService } from "./service/company.service";

@Component({
    selector: "app-admin-companies",
    templateUrl: "./admin-companies.component.html",
    providers: [CompanyService],
})
export class AdminCompaniesComponent {
    companies$ = this.companyService.getCompanyData();
    constructor(
        private router: Router,
        private companyChangeEventService: CompanyChangeEventService,
        private companyService: CompanyService
    ) {}

    chooseCompany(companyId: number): void {
        this.companyChangeEventService.fire({
            companyId: companyId,
        });
        this.router.navigate(["/admin", companyId, "companies"]);
    }
}
