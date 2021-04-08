import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompanyChangeEventService } from "app/core/services/company-change-event.service";
import { AssetService } from "./service/asset.service";

@Component({
    selector: "app-admin-assets",
    templateUrl: "./admin-assets.component.html",
    providers: [AssetService],
})
export class AdminAssetsComponent implements OnInit {
    assets$ = this.assetService.getAssets();
    constructor(
        private router: Router,
        private companyChangeEventService: CompanyChangeEventService,
        private assetService: AssetService
    ) {}

    ngOnInit() {}

    chooseCompany(companyId: number): void {
        this.companyChangeEventService.fire({
            companyId: companyId,
        });
        this.router.navigate(["/admin", companyId, "assets"]);
    }
}
