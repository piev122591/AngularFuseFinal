import { Component } from "@angular/core";
import { CompanyService } from "../service/company.service";
import { CompanyEventType } from "../data/products";

@Component({
    selector: "app-new-company",
    templateUrl: "./new-company.component.html",
    providers: [CompanyService],
})
export class NewCompanyComponent {
    constructor(private companyService: CompanyService) {}
    action(event: CompanyEventType): void {
        this.companyService.submitAdd(event);
    }
}
