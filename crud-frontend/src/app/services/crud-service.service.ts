import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http:HttpClient) { }

  user_submit(user_data: any){
    return this.http.post('', user_data);
  }
}
