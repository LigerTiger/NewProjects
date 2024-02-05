import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationcontrolmatrixService {

  constructor(private http:HttpClient) { }

  URL="https://localhost:44311/api/User"


  getApplicationnameList(){
    return this.http.get(`${this.URL}/getallappnames`)
  }


}
