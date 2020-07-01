import { Component, OnInit } from '@angular/core';
import { UseraccountService } from 'src/providers/useraccount.service';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { User } from 'src/entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UseraccountService]
})
export class LoginComponent implements OnInit {

 
  constructor(private useraccountService:UseraccountService,private formBuilder:FormBuilder) { }

  userModel :User;
  loginUserForm : FormGroup;

  createLoginForm(){
    this.loginUserForm = this.formBuilder.group({
      Username:["",Validators.required],
      Password:["",Validators.required]
    })
      
    
  }
  ngOnInit() {
    this.createLoginForm();
  }

  signIn(){
   debugger
    if(this.loginUserForm.valid){
      this.userModel = Object.assign({},this.loginUserForm.value);
      console.log(this.userModel );
      this.useraccountService.SignIn(this.userModel);
    }
    
  }
}
