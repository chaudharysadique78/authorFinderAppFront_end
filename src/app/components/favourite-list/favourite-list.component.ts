import { Component, inject } from '@angular/core';
import { Author } from 'src/app/entity/author';
import { User } from 'src/app/entity/user';
import { FavouriteService } from 'src/app/services/favourite.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent {
  msg='';

  constructor(private favService:FavouriteService,private loginService:LoginService){}

authors:Author[]=[]

user:User={
  id: 0,
  email: '',
  password: '',
  phone: '',
  age: 0
}

ngOnInit(){
  this.favService.getUser(this.loginService.getUserName()).subscribe(res=>{
    this.user=res;
    console.log(this.user.id);
  this.favService.getFav(this.user.id).subscribe((res:Author[])=>{
    this.authors=res;
    console.log(res);
  },(error)=>{
    console.error("Field to fetch data",error);
    this.msg="Author Not Found";
  })  
  });

}


}
