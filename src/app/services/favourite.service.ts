import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Author } from '../entity/author';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private http:HttpClient,private loginService:LoginService) { }

  baseUrlFav="http://localhost:8084/api/v1/fav/addfav/";
  baseUrlUser="http://localhost:8081/api/v1/user/findByemail/";
  baseUrl="http://localhost:8084/api/v1/fav/getfav/";

  addFav(userId:any,authorId:any):Observable<any>{
  return this.http.put(this.baseUrlFav+userId+"/"+authorId,null);
  }

  getUser(userName:any):Observable<any>{
  return this.http.get(this.baseUrlUser+userName);
  }

  getFav(userId:any):Observable<Author[]>{
    return this.http.get<{authors:Author[]}>(this.baseUrl+userId).pipe(
      map(response=>response.authors));
  }

}
