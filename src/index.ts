
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule  } from '@angular/platform-browser';

import {Ng2MenuDirective} from "./ng2-menu-directive";

export {
  Ng2MenuDirective
};

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ Ng2MenuDirective ],
  exports:  [ Ng2MenuDirective ]
})
export class Ng2MenuModule {}
