import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-wireless-view',
  templateUrl: './wireless-view.component.html',
  styleUrls: ['./wireless-view.component.scss'],
  animations: fuseAnimations,
})
export class WirelessViewComponent implements OnInit {
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
    @Input() wireless: any;
  constructor() { }

  ngOnInit(): void {
  }

}
