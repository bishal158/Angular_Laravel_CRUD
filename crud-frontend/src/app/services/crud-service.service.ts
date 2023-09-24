import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http:HttpClient) { }
  baseURL = 'http://127.0.0.1:8000/api/';
  user_submit(user_data: any){
    return this.http.post(this.baseURL+'student', user_data);
  }
  user_show(){
    return this.http.get(this.baseURL+'student');
  }

  user_delete(id: any){
    return this.http.delete(this.baseURL+'student'+'/'+id);
  }
}
