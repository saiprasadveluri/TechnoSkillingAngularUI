import { Component, OnInit } from '@angular/core';
import { DbAccessServiceService } from '../infra/db-access-service.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryDTO } from '../models/app-models';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ShowDialogService } from '../Infra/show-dialog.service';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MatToolbarModule } from '@angular/material/toolbar'
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-blog-category-add',
  standalone: true,
  imports: [ReactiveFormsModule,MatProgressBarModule,MatToolbarModule],
  templateUrl: './admin-blog-category-add.component.html',
  styleUrl: './admin-blog-category-add.component.css'
})
export class AdminBlogCategoryAddComponent implements OnInit {
myformGroup:FormGroup;
progress:number=0;
message:string='';
currentFile:any;
fileName:string='';
constructor(private srv:DbAccessServiceService,private fb:FormBuilder,private dlgSrv:ShowDialogService,private router:Router){
this.myformGroup=fb.group({
  ctrlName:new FormControl('',Validators.required),
  ctrlDescription:new FormControl('',Validators.required),
  ctrlOrdinal:new FormControl(1,Validators.required),
  ctrlPic:new FormControl(''),
});
}
  ngOnInit(): void {
    
  }
  selectFile(event: any): void 
  {
    this.progress = 0;
    this.message = "";

    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  IsCtrlTouchedInValid(ctrlName:string):boolean{
    var ctrl=this.myformGroup.controls[ctrlName];
    return (ctrl.touched && !ctrl.valid);
  }

  IsFormValid():boolean
  {
    return this.myformGroup.valid;
  }

  NavigateToManageCategory()
  {
    this.router.navigate(['ManageCategory']);
  }
  SaveCategory()
  {
    var dto:CategoryDTO = new CategoryDTO();
    console.log(this.myformGroup.get('ctrlName'))
    dto.name=this.myformGroup.get('ctrlName')?.value
    dto.description=this.myformGroup.controls['ctrlDescription'].value;
    dto.ordinalNumber=this.myformGroup.controls['ctrlOrdinal'].value;
    dto.catgIconPicFile=this.currentFile;
  
    this.srv.AddBlogCategory(dto).subscribe(
      {
        next: (event: any)=>{
          if (event.type === HttpEventType.UploadProgress)
          {
            this.progress = Math.round(100 * event.loaded / event.total);
            console.log(this.progress);
          }
          else if (event instanceof HttpResponse)
          {
            this.message = event.body.message;
            if(event.status==200)
            {
                  this.router.navigate(['ManageCategory']);
            }
          }
        },
        error: (err: any)=>{
          this.dlgSrv.ShowSnackAutoClose("Error In operation",5000);
        }
      }
    )
  }
}
