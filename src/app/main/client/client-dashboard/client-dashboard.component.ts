import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";

@Component({
    selector: "app-client-dashboard",
    templateUrl: "./client-dashboard.component.html",
    styleUrls: ["./client-dashboard.component.scss"],
})
export class ClientDashboardComponent {
    constructor(
        private router: Router,
        private companyChangeEventService: CompanyChangeEventService
    ) {}

    chooseCompany(): void {
        this.companyChangeEventService.fire({
            companyId: undefined,
            role: "admin",
        });
        this.router.navigate(["/admin", "dashboard"]);
    }
}
