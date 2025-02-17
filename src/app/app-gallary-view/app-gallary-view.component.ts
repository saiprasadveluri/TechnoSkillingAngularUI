import { Component, OnInit } from '@angular/core';
import { DbAccessServiceService } from '../infra/db-access-service.service';
import { ShowDialogService } from '../infra/show-dialog.service';
import { GallaryResponseDTO } from '../Models/gallary-response-dto';
import { AppGallaryItemComponent } from '../app-gallary-item/app-gallary-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-gallary-view',
  standalone: true,
  imports: [AppGallaryItemComponent,CommonModule],
  templateUrl: './app-gallary-view.component.html',
  styleUrl: './app-gallary-view.component.css'
})
export class AppGallaryViewComponent implements OnInit {
  gallaryItems:GallaryResponseDTO[]=[];
  
  ngOnInit(): void {
    this.dbSrv.GetGallaryList().subscribe(
      {
        next:(data)=>{
          
          this.gallaryItems=data.Data;        
          console.log(this.gallaryItems)  
        },
        error:(err)=>{

        }
      }
    )
  }
  
  constructor(private dbSrv:DbAccessServiceService/*,private dlgSrv:ShowDialogService*/)
  {
  
  }

}
