import {Component, Type} from '@angular/core'
import { Ng2MenuDirective } from 'ng2-menu';
import { OverlayManager } from 'ng2-overlay';

@Component({
  selector: 'my-app',
  template: `
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
    `,
  providers: [OverlayManager],
  directives: [<Type>Ng2MenuDirective],
  styles: [`
    *[ng2-menu] {border: 1px solid #ccc }
 `],
})
export class AppComponent {}
