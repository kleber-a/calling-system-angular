import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FireBaseConnectionService } from 'src/app/service/fire-base-connection.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {
  @Input() isSignUp: boolean = false;

  
  constructor(
    private fireBaseConnectionService: FireBaseConnectionService,
    private formBuilder: FormBuilder
  ) { }
  public formSignIn: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })
  public formSignUp: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  public getSignIn() {
    return this.fireBaseConnectionService.SignIn(
      this.formSignIn.value.email,
      this.formSignIn.value.password
    );
  }
  public SignUp() {
    return this.fireBaseConnectionService.SignUp(
      this.formSignUp.value.name,
      this.formSignUp.value.email,
      this.formSignUp.value.password
    )
  }

  public submitForm() {
    if (this.isSignUp) {
      if (this.formSignUp.valid) {
        this.SignUp()
        this.formSignUp.value.name = '',
        this.formSignUp.value.email = '',
        this.formSignUp.value.password = ''
      }
    }
    else {
      if (this.formSignIn.valid) {
        this.getSignIn()
        this.formSignIn.value.email = '',
          this.formSignIn.value.password = '';
      }
    }
  }



}
