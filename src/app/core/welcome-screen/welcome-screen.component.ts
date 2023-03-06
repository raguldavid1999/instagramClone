import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { flashAnimation as fa } from 'angular-animations'
import { LoginServiceService } from 'src/services/login-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
  animations: [
    fa({ anchor: 'flash', duration: 7000 }),
  ]
})
export class WelcomeScreenComponent implements OnInit {
  animState = false;
  imgSrc = 'https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png';
  photoArray = [
    '../../assets/Images/File.jpg',
    '../../assets/Images/File (1).jpg',
    '../../assets/Images/File (2).jpg',
  ]
  photoIndex = 0;
  constructor(private registerApi: LoginServiceService,
    private snackBar: MatSnackBar) { }
  profileForm!: FormGroup;
  fbProfileName = 'rdraguldavid';
  loginSwitch = true;
  passwordNg:any = '';
  showPassword = true;
  passwordText = 'password';
  isAuthenticate = false;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
    this.imgSrc = this.photoArray[0];
    setInterval(() => {
      this.photoIndex++;
      if (this.photoIndex > this.photoArray.length - 1) {
        this.photoIndex = 0;
      }
      this.imgSrc = this.photoArray[this.photoIndex];
    }, 15000);
  }
  doneFlash() {
    // this.animState = !this.animState
    if (this.photoIndex == 3) {
      this.photoIndex = 0;
    }
    this.imgSrc = this.photoArray[this, this.photoIndex];
    this.photoIndex++;
  }
  login() {
    this.snackBar.open('Created successfully','close',{
      duration:4000,
      verticalPosition:'bottom'
    })
    // console.log(this.profileForm.value, 'profile form')
    // if (this.profileForm.valid) {
    //   let payload = this.profileForm.value;
    //   this.registerApi.register(payload).subscribe(res => {
    //     console.log('created successfully')
    //     this.snackBar.open('Created successfully','close',{
    //       duration:4000,
    //       verticalPosition:'bottom'
    //     })
    //   })
    // }
  }
  switchToLogin(){
    this.loginSwitch = true;
  }
  loginFbClick(){
    this.loginSwitch = false; 
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
  onSampleClick(){
    this.registerApi.sampleFunction().subscribe(res=>{
      localStorage.setItem('access_token',res.token);
      console.log(res,'sample response')
    })
  }
}


