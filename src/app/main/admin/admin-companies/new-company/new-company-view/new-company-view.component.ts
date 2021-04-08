import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CompanyEventType } from "../../data/products";

@Component({
    selector: "app-new-company-view",
    templateUrl: "./new-company-view.component.html",
    styleUrls: ["./new-company-view.component.scss"],
    animations: fuseAnimations,
})
export class NewCompanyViewComponent implements OnInit {
    @Output() action = new EventEmitter<CompanyEventType>();
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
        this.createForm();
    }

    submit(): void {
        this.action.emit({
            action: "save",
            mode: "new",
            data: {
                companyName: this.firstFormGroup.get("companyName").value,
                status: this.secondFormGroup.get("status").value,
            },
        });
    }

    private createForm(): void {
        this.firstFormGroup = this.fb.group({
            companyName: ["", Validators.required],
        });
        this.secondFormGroup = this.fb.group({
            status: [""],
        });
    }
}
