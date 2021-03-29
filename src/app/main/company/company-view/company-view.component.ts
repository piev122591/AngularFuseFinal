import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-company-view",
    templateUrl: "./company-view.component.html",
    styleUrls: ["./company-view.component.scss"],
})
export class CompanyViewComponent implements OnInit {
    @Output() companyEvent = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    chooseCompany(companyId: number): void {
        this.companyEvent.emit({
            companyId,
        });
    }
}
