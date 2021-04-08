import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { fuseAnimations } from "@fuse/animations";
import { CompanyEventType, CompanySampleData } from "../../data/products";

@Component({
    selector: "app-edit-company-view",
    templateUrl: "./edit-company-view.component.html",
    styleUrls: ["./edit-company-view.component.scss"],
    animations: fuseAnimations,
})
export class EditCompanyViewComponent implements OnInit {
    @Output() action = new EventEmitter<CompanyEventType>();

    @Input() company: CompanySampleData;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    constructor(private fb: FormBuilder) {}
    ngOnInit(): void {
        this.createForm();
    }

    submit(): void {
        this.action.emit({
            action: "save",
            mode: "edit",
            data: {
                companyName: this.firstFormGroup.get("companyName").value,
                status: this.secondFormGroup.get("status").value,
                companyId: this.company.CompanyId,
            },
        });
    }

    private createForm(): void {
        this.firstFormGroup = this.fb.group({
            companyName: [this.company.CompanyName, Validators.required],
        });
        this.secondFormGroup = this.fb.group({
            status: [this.company.Status],
        });
    }
}
