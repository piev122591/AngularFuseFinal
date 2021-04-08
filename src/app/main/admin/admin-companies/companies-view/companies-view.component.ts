import { Component, Input, OnInit } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { CompanyData } from "../../model/company.model";

@Component({
    selector: "app-companies-view",
    templateUrl: "./companies-view.component.html",
    styleUrls: ["./companies-view.component.scss"],
    animations: fuseAnimations,
})
export class CompaniesViewComponent {
    @Input() companies: CompanyData;
}
