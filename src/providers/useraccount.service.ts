import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/entities/user';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  constructor(private http: HttpClient,private router: Router,private alertifyService:AlertifyService) {
    
   }


  SignIn(userDto:User){
    
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    console.log(userDto);
    return this.http.post("http://localhost:5000/api/login/signin",JSON.stringify(userDto),{headers:headers}).subscribe(data => {      
            this.alertifyService.success("Sisteme Giriş Yapıldı");
            this.router.navigate(['/Home']);
          },
          error => {
            console.log(error);
            this.alertifyService.error("Giriş işlemi başarısız");
          }
        );
 
  }
}
