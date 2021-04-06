import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-charges-view',
  templateUrl: './charges-view.component.html',
  styleUrls: ['./charges-view.component.scss'],
  animations: fuseAnimations,
})
export class ChargesViewComponent implements OnInit {
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

    @Input() charges: any;
  constructor() { }

  ngOnInit(){ }

}
