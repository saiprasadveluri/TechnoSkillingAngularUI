import { Component, OnInit } from '@angular/core';
import { DbAccessServiceService } from '../infra/db-access-service.service';
import { ShowDialogService } from '../Infra/show-dialog.service';
import { BlogCategoryItem } from '../models/app-models';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-app-admin-blog-category-manage',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './app-admin-blog-category-manage.component.html',
  styleUrl: './app-admin-blog-category-manage.component.css'
})
export class AppAdminBlogCategoryManageComponent implements OnInit {
  blogCatgArray:BlogCategoryItem[]=[];
  curRecIdentifier:string='';
constructor(private dbSrv:DbAccessServiceService,private dlgSrv:ShowDialogService,private router:Router)
{

}
  ngOnInit(): void {
      this.PopulateGrid();    
  }

  PopulateGrid()
  {
    this.dbSrv.GetBlogCategoryList().subscribe({
      next:(data)=>{
        console.log(data);
        this.blogCatgArray=data;
      },
      error:(err)=>{
        this.dlgSrv.ShowSnackAutoClose("Error In fetching data",5000);
      }
});
  }

  ConfirmDelete(catgId:string)
  {
    this.curRecIdentifier=catgId;
    var option=this.dlgSrv.ShowDeleteConfirmDialog("Are you sure to delete the record?",
      ()=>{
        console.log(catgId);
      this.dbSrv.DeleteBlogCategory(catgId).subscribe(
        {
          next:()=>{
                this.PopulateGrid();
          },
          error:()=>{
            console.log('Error'+catgId);
          }
        }
      )
    })    
  }

  NavigateManagePosts(catgId:string)
  {
    this.router.navigate(['AdminBlogPostManageComponent',catgId]);
  }
  NavigateToHome()
  {
    this.router.navigate(['Home']);
  }
  AddBlogCategory()
  {
    this.router.navigate(['AdminBlogCategoryAdd']);
  }
}
