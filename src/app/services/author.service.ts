import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  baseUrl="http://localhost:8083/api/v1/author";

  constructor(private httpClient:HttpClient) { }

  getAllAuthor():Observable<any>{
   return this.httpClient.get(this.baseUrl);
  }

}
