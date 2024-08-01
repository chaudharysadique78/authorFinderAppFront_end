import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClinet:HttpClient) { }

    baseUrl="http://localhost:8081/api/v1/user/";

   registerUser(data:any):Observable<any>{
    return this.httpClinet.post(this.baseUrl + "register", data);
   }


}
