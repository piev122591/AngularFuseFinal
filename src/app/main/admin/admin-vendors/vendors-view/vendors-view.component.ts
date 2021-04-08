import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-vendors-view',
  templateUrl: './vendors-view.component.html',
  styleUrls: ['./vendors-view.component.scss'],
  animations: fuseAnimations,
})
export class VendorsViewComponent implements OnInit {
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
    @Input() vendors: any;
    
  constructor() { }

  ngOnInit(): void {
  }

}
