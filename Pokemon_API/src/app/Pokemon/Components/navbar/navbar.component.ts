import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

visible:boolean = true;

activarNav(){
this.visible=false
}
}
