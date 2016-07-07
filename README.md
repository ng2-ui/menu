# ng2-menu
Angular2 menu directive

<a href="https://plnkr.co/edit/qmmUxn?p=preview">
  <img src="http://i.imgur.com/ezWv5Jw.png" width="50% border="1" />
</a>

## Install

1. install ng2-menu

        $ npm install ng2-menu --save

2. add `map` and `packages` to your `systemjs.config.js`. `ng2-menu` reuires `ng2-overlay`

        map['ng2-overlay'] = 'node_modules/ng2-overlay';
        map['ng2-menu'] = 'node_modules/ng2-menu';
        packages['ng2-overlay'] = { main: 'dist/index.js', defaultExtension: 'js'];
        packages['ng2-menu'] = { main: 'dist/index.js', defaultExtension: 'js'];

3.  add ng2-menu.css into your html

        <link rel="stylesheet" href="https://npmcdn.com/ng2-menu/dist/ng2-menu.css" />

## Use it in your code

1. import and add directive in your component

        import { OverlayManager } from 'ng2-overlay';
        import { Ng2MenuDirective } from 'ng2-menu-overlay';

        @Component({
          selector: 'my-app',
          templateUrl: './app/app.tpl.html',
          providers: [ OverlayManager ],
          directives: [ Ng2TooltipDirective ]
        })


2. You are ready. use it in your template

       <ul ng2-menu>
         <li> Menu Item 1 </li>
         <li> Menu Item 2
           <ul ng2-menu>
             <li> Menu Item 2-1 </li>
             <li> Menu Item 2-2 
               <ul ng2-menu>
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

