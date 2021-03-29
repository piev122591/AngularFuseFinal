import { Component, OnInit } from "@angular/core";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";

@Component({
    selector: "app-company",
    templateUrl: "./company.component.html",
})
export class CompanyComponent implements OnInit {
    constructor(private companyChangeEventService: CompanyChangeEventService) {}

    ngOnInit() {}

    onAction(event: any): void {
        this.companyChangeEventService.fire(event);
    }
}
