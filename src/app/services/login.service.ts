import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Base_URL = "http://localhost:8082/api/v1/auth/";

  userName='';

  constructor(private http:HttpClient) { }
  
   setUserName(userName:any){
    this.userName=userName;
   }
   
   getUserName(){
    return this.userName
   }

 
   
  //calling server to generate token

generateToken(credentials:any){
 //generate token
 return this.http.post(this.Base_URL+"login",credentials)};

  //for login user
  loginUser(token: string) {
    localStorage.setItem("token", token);
    return true;
  }

  // to check user is login or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token == null || token === '') {
      return false;
    } else {
      return true;
    }
  }

  // for logout user
  logoutUser() {   
    return localStorage.removeItem("token");
  }

  //for getting token
  getToken(){
   return localStorage.getItem("token");
  }


}
