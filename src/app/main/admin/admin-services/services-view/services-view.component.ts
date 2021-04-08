import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-services-view',
  templateUrl: './services-view.component.html',
  styleUrls: ['./services-view.component.scss'],
  animations: fuseAnimations,
})
export class ServicesViewComponent implements OnInit {
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
    @Input() services: any;
  constructor() { }

  ngOnInit() {}
}
