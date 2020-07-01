import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/entities/user';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
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



  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


     
    // return this.http.post<User>("http://localhost:44357/api/login/signin",JSON.stringify(user),this.httpOptions)
    //   .subscribe(data => {      
    //       console.log(data);
    //       this.router.navigate(['/Home']
    //       //,{ queryParams: { user: user.Id } }
    //       );
    //       // handler: () => {
          
    //       //   console.log(data);
    //       // };
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );

}
