import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { HmComponent } from './form/hm/hm.component';
import { UpdateformComponent } from './updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    FormComponent,
    HmComponent,
    UpdateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
