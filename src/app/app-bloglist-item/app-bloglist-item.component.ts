import { Component, Input, OnInit,Output } from '@angular/core';
//import { BlogCategoryItem } from '../models/blog-category-request-dto';
import { EventEmitter } from '@angular/core';
import {MatCardModule} from '@angular/material/card'
import { DbAccessServiceService } from '../Infra/db-access-service.service';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-app-bloglist-item',
  standalone:true,
  imports:[MatCardModule,MatToolbarModule],
  templateUrl: './app-bloglist-item.component.html',
  styleUrls: ['./app-bloglist-item.component.css']
})
export class AppBloglistItemComponent implements OnInit {
 @Input() 
  public item:any;
  catPicBase64String:string="";
  @Output()
  public getPostsEvent:EventEmitter<string>;

  constructor(private srv:DbAccessServiceService) 
  { 
   this.getPostsEvent=new EventEmitter<string>();   
  }

  ngOnInit(): void {
    
  }
  OnListPosts(){
    console.log(this.item.catgId);
    this.getPostsEvent.emit(this.item.CatgId);
  }
}
