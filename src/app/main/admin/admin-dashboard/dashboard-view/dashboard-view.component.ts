import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Company } from "app/login/model/login.model";

@Component({
    selector: "app-dashboard-view",
    templateUrl: "./dashboard-view.component.html",
    styleUrls: ["./dashboard-view.component.scss"],
})
export class DashboardViewComponent {
    @Output() chooseCompanyEvent = new EventEmitter<Company>();
    @Input() dashboardData: any;

    chooseCompany(company: Company): void {
        this.chooseCompanyEvent.emit(company);
    }
}
