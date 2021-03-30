import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";

@Component({
    selector: "app-admin-dashboard",
    templateUrl: "./admin-dashboard.component.html",
    styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
    constructor(
        private router: Router,
        private companyChangeEventService: CompanyChangeEventService
    ) {}

    ngOnInit() {}
    chooseCompany(companyId: number): void {
        this.companyChangeEventService.fire({
            companyId: companyId,
        });
        this.router.navigate(["/client", companyId, "dashboard"]);
    }
}
