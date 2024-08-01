import { Component } from '@angular/core';
import { Author } from 'src/app/entity/author';
import { User } from 'src/app/entity/user';
import { AuthorService } from 'src/app/services/author.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {

  constructor(private authorService:AuthorService,private loginService:LoginService
    ,private favService:FavouriteService){}

  authors:Author[]=[];
  user:User={
    id: 0,
    email: '',
    password: '',
    phone: '',
    age: 0
  }
  
  ngOnInit(){
    this.authorService.getAllAuthor().subscribe(res=>{
      console.log(res);
      this.authors=res;
    })
  }

  addFav(authorId:any) {
      this.favService.getUser(this.loginService.getUserName()).subscribe(res=>{
        this.user=res;
        console.log(this.user.id);
        this.favService.addFav(this.user.id,authorId).subscribe(res=>{
          console.log("Author added to Favourite");
          alert("Added to favourite")
        })
      });
      
    }

}
