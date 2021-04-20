import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fuseAnimations } from "@fuse/animations";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { VendorsEventType } from "../../data/products";

@Component({
  selector: 'app-new-vendors-view',
  templateUrl: './new-vendors-view.component.html',
  styleUrls: ['./new-vendors-view.component.scss'],
  animations: fuseAnimations,

})
export class NewVendorsViewComponent implements OnInit {

    @Output() action = new EventEmitter<VendorsEventType>();
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  submit(): void {
    this.action.emit({
        action: "save",
        mode: "new",
        data: {
            vendorName: this.firstFormGroup.get("vendorName").value,
            isWireless: this.firstFormGroup.get("isWireless").value,
            isWireline: this.firstFormGroup.get("isWireline").value,
            electronicData: this.firstFormGroup.get("electronicData").value,
            status: this.firstFormGroup.get("status").value,

        },
    });
}


  private createForm(): void {
    this.firstFormGroup = this.fb.group({
        vendorName: ["", Validators.required],
        isWireless: [""],
        isWireline:[""],
        electronicData: [""],
        status: [""],

    });
    this.secondFormGroup = this.fb.group({

        poBox:[""],
        address:[""],
        state:[""],
        city:[""],
        zip:[""],
      
    });
 
}

}
