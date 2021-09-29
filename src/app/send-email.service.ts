import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {

  constructor(private http: HttpClient) { }
  send(data:any): Observable<any> {
    console.log(JSON.stringify(data))
    return this.http.post("https://tq0t8faz46.execute-api.ap-northeast-1.amazonaws.com/default/dodo-mozo",JSON.stringify(data))
    
  }
}
