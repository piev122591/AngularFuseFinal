import { Component, Input, OnInit } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";

@Component({
    selector: "app-assets-view",
    templateUrl: "./assets-view.component.html",
    styleUrls: ["./assets-view.component.scss"],
    animations: fuseAnimations,
})
export class AssetsViewComponent implements OnInit {
    displayedColumns = [
        "id",
        "image",
        "name",
        "category",
        "price",
        "quantity",
        "active",
    ];
    @Input() assets: any;

    constructor() {}

    ngOnInit() {}
}
