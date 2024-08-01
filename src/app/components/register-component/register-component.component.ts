import { Component } from '@angular/core';
import { User } from 'src/app/entity/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent {

  constructor(private userServivce:UserService){}

  user:User={
    id: 0,
    email: '',
    password: '',
    phone: '',
    age: 0
  };

  onSubmit(formDetails:any){
    console.log(this.user)
    this.userServivce.registerUser(this.user).subscribe(res=>{
      alert("Form Submitted");
    });

  }
}
