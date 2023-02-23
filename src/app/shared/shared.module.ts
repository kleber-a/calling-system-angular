import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule} from '@angular/forms';

import { FormsComponent } from './components/forms/forms.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormsComponent
  ],
  exports:[
    FormsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
