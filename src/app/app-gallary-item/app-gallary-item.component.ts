import { Component, Input, OnInit } from '@angular/core';
import { DbAccessServiceService } from '../infra/db-access-service.service';
import { ShowDialogService } from '../infra/show-dialog.service';
import { GallaryResponseDTO } from '../Models/gallary-response-dto';

@Component({
  selector: 'app-app-gallary-item',
  standalone: true,
  imports: [],
  templateUrl: './app-gallary-item.component.html',
  styleUrl: './app-gallary-item.component.css'
})
export class AppGallaryItemComponent implements OnInit {
@Input('gallaryId')
gallaryId:any;
gallaryItem:GallaryResponseDTO|undefined;
imgSrcString:string='';
constructor(private dbSrv:DbAccessServiceService/*,private dlgSrv:ShowDialogService*/)
{

}
  ngOnInit(): void {
    this.dbSrv.GetGallaryItem(this.gallaryId).subscribe({

      next:(res)=>{
          this.gallaryItem=res.Data;
          this.imgSrcString=`data:image/png;base64,${this.gallaryItem?.PhtoData}`;
      }
    });
  }

}
