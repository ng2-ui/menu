# menu
Angular2 menu directive

<a href="https://rawgit.com/ng2-ui/menu/master/app/index.html">
  <img src="http://i.imgur.com/w6yJBua.png" width="50% border="1" />
</a>

Plunker Example: https://plnkr.co/edit/u6sihV?p=preview

## Install

1. install @ngui/menu

        $ npm install @ngui/menu --save

2. add `map` and `packages` to your `systemjs.config.js`. 

        map['@ngui/menu'] = 'node_modules/@ngui/menu/dist/menu.umd.js';

3. import NguiMenuModule to your AppModule
        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { NguiMenuModule } from '@ngui/menu';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, NguiMenuModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

For full example, please check out `test` directory to see the example of;

  - `systemjs.config.js`
  - `app.module.ts`
  -  and `app.component.ts`.

3.  add ngui-menu.css into your html

        <link rel="stylesheet" href="https://unpkg.com/menu/dist/ngui-menu.css" />

## Use it in your code
 You are ready. use it in your template

       <ul ngui-menu>
         <li> Menu Item 1 </li>
         <li> Menu Item 2
           <ul ngui-menu>
             <li> Menu Item 2-1 </li>
             <li> Menu Item 2-2 
               <ul ngui-menu>
                 <li> Menu Item 2-2-1 </li>
                 <li> Menu Item 2-2-2 </li>
                 <li> Menu Item 2-2-3 </li>
               </ul>
             </li>
             <li> Menu Item 2-2 </li>
           </ul>
         </li>
         <li> Menu Item 3 </li>
       </ul>

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 

