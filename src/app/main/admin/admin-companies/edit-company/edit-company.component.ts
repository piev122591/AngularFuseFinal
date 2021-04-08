import { Component, Input, OnInit } from "@angular/core";
import { CompanyService } from "../service/company.service";
import { CompanyEventType, CompanySampleData } from "../data/products";
import { of } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { values } from "lodash";
import { map } from "rxjs/operators";

@Component({
    selector: "app-edit-company",
    templateUrl: "./edit-company.component.html",
})
export class EditCompanyComponent {
    company$ = this.route.data.pipe(
        map(
            (value: { company: CompanySampleData }): CompanySampleData => {
                return value.company;
            }
        )
    );

    constructor(
        private companyService: CompanyService,
        private route: ActivatedRoute
    ) {}
    action(event: CompanyEventType): void {
        this.companyService.submitEdit(event);
    }
}
