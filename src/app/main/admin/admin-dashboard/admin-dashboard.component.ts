import { Component } from "@angular/core";
import { Company } from "app/login/model/login.model";
import { DashboardService } from "./dashboard.service";

@Component({
    selector: "app-admin-dashboard",
    templateUrl: "./admin-dashboard.component.html",
    providers: [DashboardService],
})
export class AdminDashboardComponent {
    dashboardData$ = this.dashboardService.getUserCompany();
    constructor(private dashboardService: DashboardService) {}
    chooseCompanyEvent(company: Company): void {
        this.dashboardService.chooseCompany(company);
    }
}
