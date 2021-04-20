import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { fuseAnimations } from "@fuse/animations";
import { VendorsEventType, VendorsSampleData } from "../../data/products";
@Component({
  selector: 'app-edit-vendors-view',
  templateUrl: './edit-vendors-view.component.html',
  styleUrls: ['./edit-vendors-view.component.scss'],
  animations: fuseAnimations,
  
})
export class EditVendorsViewComponent implements OnInit {
    @Output() action = new EventEmitter<VendorsEventType>();

    @Input() vendor: VendorsSampleData;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.firstFormGroup = this.fb.group({
        // companyName: [this.vendor.VendorName, Validators.required],
    });
    this.secondFormGroup = this.fb.group({
        // status: [this.vendor.Status],
    });
}

}
