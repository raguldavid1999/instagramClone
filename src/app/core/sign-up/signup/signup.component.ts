import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/services/login-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  passwordNg:any = '';
  showPassword = true;
  passwordText = 'password';
  constructor(private apiService: LoginServiceService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      mobile_number_or_email: new FormControl('',Validators.required),
      full_name: new FormControl('',Validators.required),
      mobile_number_or_email_repeat: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)

    })
  }
  signUp(){
    console.log(this.signUpForm.value)
    let payload = this.signUpForm.value;
    this.apiService.signUp(payload).subscribe(res=>{
      console.log(res,'Account created successfully')
    })
  }
  showPasswordChange(text:any){
    if(text=='show'){
      this.showPassword = false;
      this.passwordText = 'text';
    }
    else{
      this.showPassword = true;
      this.passwordText = 'password';
    }
  }
}
