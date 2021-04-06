import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-edi-view',
  templateUrl: './edi-view.component.html',
  styleUrls: ['./edi-view.component.scss'],
  animations: fuseAnimations,
})
export class EdiViewComponent implements OnInit {
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
    @Input() edi: any;
  constructor() { }

  ngOnInit(){
  }

}
