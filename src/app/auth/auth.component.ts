import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgIf} from "@angular/common";
import {AuthService} from "../services/auth.service";
import {getXHRResponse} from "rxjs/internal/ajax/getXHRResponse";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  // ? in acest caz reprezinta null operator, permmite ca variabila sa fie initializata mai tarziu
  // atunci cand folosim null operator, variabila cand este apelata trebuie sa fie
  // urmata de semnul ! care semnifica ca acea variabila NU este NULL
  authForm?:FormGroup;
  viewType : string = "login";

  constructor(private formBuilder:FormBuilder, private authService : AuthService) {
    // this.authForm= this.formBuilder.group({  !exemplu de initializare!
    //
    // });
    let a = (1 > 0)? 0:1;
    this.onSetViewType('login');

  }
  onRegister():void{
    if (this.authForm!.valid){
      console.log(this.authForm!.value);
      const body = this.authForm!.value;
      this.authService.register(body).subscribe((response : any) =>{
        console.log(response);
      } )
    }else {
      alert("Formular invalid");

    }
  }

  onSetViewType(viewType: string):void {
    console.log(viewType);
    this.viewType = viewType;

    switch (this.viewType){
      case 'login':
        this.authForm =this.formBuilder.group({
          email:["",Validators.required],
          password:["",Validators.required],
        });
        break;
      case 'register':
        this.authForm =this.formBuilder.group({
          username:["",Validators.required],
          email:["",Validators.required],
          password:["",Validators.required],
          rePassword:["",Validators.required]
        });
        break;
    }
  }
  onLogin():void {
    if (this.authForm!.valid){
      console.log(this.authForm!.value);

      const body = this.authForm!.value;
      let request = this.authService.login(body);

      request.subscribe((response : any) =>{
        console.log(response);
      })
    }else {
      alert("Formular invalid");

    }
  }
}
