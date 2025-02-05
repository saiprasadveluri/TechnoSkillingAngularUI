import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHelper } from './http-helper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {jwtDecode} from 'jwt-decode';
import { BlogCategoryRequestDTO } from '../Models/blog-category-request-dto';

//import { serialize } from 'object-to-formdata';
@Injectable({
  providedIn: 'root'
})
export class DbAccessServiceService {
 
  private JWT_ROLE_KEY:string='http://schemas.microsoft.com/ws/2008/06/identity/claims/role';
  constructor(private http:HttpClient,private httpHelper:HttpHelper) { 
    
    
  }

  AddBlogCategory(inpData:BlogCategoryRequestDTO):Observable<HttpEvent<any>>
  {
    let hdr:HttpHeaders= new HttpHeaders().append("contentType","file");
    var frmData:FormData=new FormData();
    frmData.append('BlogCatgName',inpData.BlogCatgName);  
    frmData.append('BlogCatgDescription',inpData.BlogCatgDescription); 
    frmData.append('OrdinalNumber', inpData.OrdinalNumber.toString()); 
    if(inpData.BlogCatgIconPicFile!=null)
    {      
      frmData.append('inpFile',inpData.BlogCatgIconPicFile);      
    }
    return this.httpHelper.HttpRequest(frmData,'POST','BlogCategory',hdr);
 }
 GetBlogCategoryList():Observable<HttpEvent<any>>
 {
  return this.httpHelper.HttpGet("BlogCategory",undefined,undefined);
 }

  

  
  IsInRole(reqRole:string):boolean{
     var Auth=localStorage.getItem('Auth');
     var token=localStorage.getItem("AuthToken");
     if(Auth!=undefined && token!=undefined)
     {
      var obj=this.DecodeJWT(token);
      return reqRole==obj[this.JWT_ROLE_KEY];
     }
     else
     return false;      
  }

  IsAuthenticated():boolean{
    var Auth=localStorage.getItem('Auth');
    return Auth!=undefined;
  }

  LogOffUser()
  {
    localStorage.removeItem('Auth');
    localStorage.removeItem('AuthToken');
  }

  private DecodeJWT(inp:string):any
  {
    var JwtPayload=jwtDecode(inp);
    //console.log(JwtPayload);
    return JwtPayload;
  }

  GetLoggedInUserId():string|null
  {
    return localStorage.getItem("UserId");
  }

  GetTodayString():string
  {
    var today  = new Date();

      var todayString=`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;//`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;//today.toLocaleDateString("en-US");
      return todayString;
    }


}
