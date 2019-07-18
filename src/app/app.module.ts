import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PopOverComponent } from './pop-over/pop-over.component';

@NgModule({
  imports:      [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    AlertModule.forRoot() 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    PopOverComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
