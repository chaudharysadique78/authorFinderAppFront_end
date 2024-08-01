import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService:LoginService){}

  userName=''
  msg=''

  credentials={
  email:'',
  password:''
  
}



onSubmit() {
  this.loginService.setUserName(this.credentials.email);
  // alert(this.loginService.getUserName());

  if ((this.credentials.email != '' && this.credentials.password != '') && (this.credentials.email != null && this.credentials.password != null)) {

    // generate the token
    this.loginService.generateToken(this.credentials).subscribe((response: any) => {
      console.log(response.token);
      this.loginService.loginUser(response.token);
     // window.location.href = "/dash"
     alert("Log in Successful")
    }, error => {
      console.log(error);
      this.msg="Bad Credentails";
    })  
  }
  else {
    console.log('fields are empty');
    //this.msg="Fields are Empty"
  }
}

}

