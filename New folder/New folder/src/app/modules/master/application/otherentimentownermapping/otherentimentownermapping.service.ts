import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherentimentownermappingService {

  private apiUrl = 'https://localhost:7242/api/Employee';
  private apiUrl1 =  'https://localhost:7171/api/Employee';

  constructor(private http:HttpClient) { }

  onSubmit(data:any){
    console.log("data====>",data);
    
    return this.http.post(`${this.apiUrl1}/SrNo`,data)
  }

  getData(empid:any,type:any): Observable<any> {
    https://localhost:7171/api/Employee/Verify?empAdid=EMP20444212&type=Windows
    return this.http.get(`${this.apiUrl1}/Verify?empAdid=${empid}&type=${type}`);
  }

  getListValue(){
    https://localhost:7171/api/Employee/empAdId?empAdId=SSES374014
    return this.http.get(` https://localhost:7171/api/Employee`)
    // return this.http.get(`https://localhost:7242/api/OtherEntitlementOwnerMapping`)
  }

  updateEmpid(empid:any,data?:any){
    return this.http.put(`${this.apiUrl}/EmpAdid?EmpAdid=${empid}`,data);
    // return this.http.put(`${this.apiUrl}/EmpAdid?EmpAdid=${empid}`,data);
  }

  editValue(empid:any){
        return this.http.get(`https://localhost:7171/api/Employee/empAdId?empAdId=${empid}`)
  }

  deleteUser(empid:any,srNo?:any):Observable<any>{
    https://localhost:7242/api/Employee/EmpAdId?empAdid=SSES374014&SrNo=5
    return this.http.delete(`${this.apiUrl}/EmpAdId?empAdid=${empid}&SrNo=${srNo}`);
    
      }
  

}