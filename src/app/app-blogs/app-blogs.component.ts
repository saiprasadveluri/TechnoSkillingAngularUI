import { Component, OnInit,AfterViewInit } from '@angular/core';

//import { BlogCategoryItem } from '../Models/app-models';
import { Router } from '@angular/router';

import { DbAccessServiceService } from '../Infra/db-access-service.service';
import { AppBloglistItemComponent } from '../app-bloglist-item/app-bloglist-item.component';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BlogCategoryResponseDTO } from '../Models/blog-category-response-dto';


@Component({
  selector: 'app-app-blogs',
  standalone:true,
  imports:[MatGridListModule,MatGridTile,AppBloglistItemComponent,MatToolbarModule],
  providers:[AppBloglistItemComponent],
  templateUrl: './app-blogs.component.html',
  styleUrls: ['./app-blogs.component.css']
})
export class AppBlogsComponent implements AfterViewInit {
 blogCatItems:BlogCategoryResponseDTO[]=[];
  constructor(private srv:DbAccessServiceService,private route:Router) { 

  }
  ngAfterViewInit(): void {
  //this.tostHelper.AlertCard("Contacting Server...Please wait....");
  this.srv.GetBlogCategoryList().subscribe({
    next:(res:any)=>{
      this.blogCatItems=res.Data;
    },
    error:(err:any)=>{

    }
  });
    
  }

GetPostList(obj:any)
{
  console.log('from event handler...')
  console.log(obj);
  this.route.navigate(['PostList',obj.catgId]);
}
}
