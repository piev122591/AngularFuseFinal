import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-companies-view',
  templateUrl: './companies-view.component.html',
  styleUrls: ['./companies-view.component.scss'],
  animations: fuseAnimations,
})
export class CompaniesViewComponent implements OnInit {

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
    @Input() companies: any;
  constructor() { }

  ngOnInit(){
  }

}
