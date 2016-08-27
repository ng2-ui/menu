import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";

import { AppComponent }   from './app.component';
import { Ng2MenuModule }  from 'ng2-menu';

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2MenuModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }