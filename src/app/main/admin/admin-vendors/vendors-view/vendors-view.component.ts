import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { VendorsData } from "../../model/vendors.model";

@Component({
  selector: 'app-vendors-view',
  templateUrl: './vendors-view.component.html',
  styleUrls: ['./vendors-view.component.scss'],
  animations: fuseAnimations,
})
export class VendorsViewComponent {
    @Input() vendors: VendorsData;
}


