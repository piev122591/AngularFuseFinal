import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-payments-view',
  templateUrl: './payments-view.component.html',
  styleUrls: ['./payments-view.component.scss'],
  animations: fuseAnimations,
})
export class PaymentsViewComponent implements OnInit {
    displayedColumns = [
        "DeviceId",
        "Vendor",
        "AssetType",
        "Make",
        "Model",
        "Status",
        "Image",
        "Action",
      
    ];
@Input() payments: any;

  constructor() { }
  ngOnInit() {
  }

}
