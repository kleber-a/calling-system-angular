import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule} from '@angular/forms';

import { FormsComponent } from './components/forms/forms.component';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeaderTitleComponent } from './components/header-title/header-title.component';




@NgModule({
  declarations: [
    FormsComponent,
    HeaderComponent,
    HeaderTitleComponent,
    
  ],
  exports:[
    FormsComponent,
    HeaderComponent,
    HeaderTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
