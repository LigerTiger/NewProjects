import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationdlmasterService {

  constructor(private http:HttpClient) { }


  URL="https://localhost:44311/api/User"
  

  getDlMatser(){
    return this.http.get(`${this.URL}/FetchAppDMMaster`);
  }


  postDlMaster(DlData:any){
    return this.http.post(`${this.URL}/addDLMaster`,DlData)
  }


  updateDlMaster(DlData:any,id:any){
    console.log(`${this.URL}/updateDLMaster?code=${id}`,DlData);
    
    return this.http.put(`${this.URL}/updateDLMaster?code= ${id}`,DlData)
  }


  getApplicationnameList(){
    return this.http.get(`${this.URL}/getallappnames`)
  }


  searchByAny(appName:any,emailID:any,activeStatusValue:any){
    return this.http.get(`${this.URL}/SearchAppDLMaster?AppName=${appName}&EmailID=${emailID}&ActiveStatus=${activeStatusValue}`)
  }

}
