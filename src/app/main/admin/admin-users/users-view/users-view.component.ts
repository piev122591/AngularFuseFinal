import { Component, Input, OnInit } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.scss'],
  animations: fuseAnimations,
})
export class UsersViewComponent implements OnInit {
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
    
    @Input() users: any;
  constructor() { }

  ngOnInit(){
  }

}
