import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 'angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = new FormGroup ({});

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
      this.form = this.fb.group({
        username:[
          null,
           [
            Validators.required, 
            Validators.minLength(8), 
            Validators.maxLength(20),
            ],
          ],
        password:[
          null,
           [
            Validators.required,
            Validators.minLength(8), 
            Validators.maxLength(20),
            Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/),
            ],
          ]
      });
  }

  
formSubmit(form: any){
  alert('Login exitoso\n' + JSON.stringify(form.value, null, 4)
  );
}
formCancel(){
  alert('Login cancelado');

}
}


