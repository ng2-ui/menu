import {Component, Type} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `
<div>
  <div class="dropdown-menu">Dropdown Menu
    <ul class="horizontal-menu">
      <li> Item 1
        <ul ng2-menu="bottom">
          <li> Menu Item 1-1 
          <li> Menu Item 1-2 
          <li> Menu Item 1-3 
        </ul>
      
      <li> Item 2
        <ul ng2-menu="bottom">
          <li> Menu Item 2-1 
          <li> Item 2-2 
            <ul ng2-menu="right">
              <li> Menu Item 2-2-1 
              <li> Menu Item 2-2-2 
              <li> Menu Item 2-2-3 
            </ul>
          
          <li> Menu Item 2-3 
        </ul>
      
      <li>Menu Item 3
    </ul>
  </div>
</div>

<div style="float:right">
  <div class="left-side-menu">Left-Side Menu
    <ul ng2-menu="left">
      <li> Menu Item 1
        <ul ng2-menu="left">
          <li> Menu Item 1-1
          <li> Menu Item 1-2 
          <li> Menu Item 1-3
        </ul>
      <li> Menu Item 2
        <ul ng2-menu="left">
          <li> Menu Item 2-1 &nbsp; &nbsp; &nbsp;
          <li> Menu Item 2-2 
            <ul ng2-menu="left">
              <li> Menu Item 2-2-1 
              <li> Menu Item 2-2-2 
              <li> Menu Item 2-2-3 
            </ul>
          
          <li> Menu Item 2-3 
        </ul>
      <li>Menu Item 3 &nbsp; &nbsp; &nbsp;
    </ul>
  </div>
</div>
  
<div style="margin-top: 100px">
  <div class="right-side-menu">Right-Side Menu
    <ul ng2-menu="right">
      <li> Menu Item 1 
        <ul ng2-menu="right">
          <li> Menu Item 1-1
          <li> Menu Item 1-2 
          <li> Menu Item 1-3
        </ul>
      <li> Menu Item 2
        <ul ng2-menu="right">
          <li> Menu Item 2-1 &nbsp; &nbsp; &nbsp;
          <li> Menu Item 2-2 
            <ul ng2-menu="right">
              <li> Menu Item 2-2-1 
              <li> Menu Item 2-2-2 
              <li> Menu Item 2-2-3 
            </ul>
          
          <li> Menu Item 2-3 
        </ul>
      <li>Menu Item 3 &nbsp; &nbsp; &nbsp;
    </ul>
  </div>
</div>
  
<div style="position: fixed; bottom: 10px">
  <div class="bottom-menu">Bottom Menu
    <ul class="horizontal-menu" ng2-menu="right">
      <li> Menu Item 1
        <ul ng2-menu="top">
          <li> Menu Item 1-1
          <li> Menu Item 1-2 
          <li> Menu Item 1-3
        </ul>
      <li> Menu Item 2
        <ul ng2-menu="top">
          <li> Menu Item 2-1 
          <li> Menu Item 2-2
          <li> Menu Item 2-3
        </ul>
      <li> Menu Item 3
        <ul ng2-menu="top">
          <li> Menu Item 3-1
          <li> Menu Item 3-2
          <li> Menu Item 3-3
        </ul>
    </ul>
  </div>
  
</div>
    `,
  styles: [`
    ul.horizontal-menu {
      display: inline-block;
      width: 600px;
    }
    ul.horizontal-menu > li {
      border: 1px solid #ccc;
      display: inline-block !important;
    }
    .dropdown-menu, .right-side-menu, .bottom-menu {
      display: inline-block;
    }
 `],
})
export class AppComponent {}
