import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {NguiMenuDirective} from "./menu.directive";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ NguiMenuDirective ],
  exports:  [ NguiMenuDirective ]
})
export class NguiMenuModule {}