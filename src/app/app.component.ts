import { Component }          from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

//import { Home } from './home/home.component';
import { EduLogin } from './login/login.component';

//import './app.css';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    //Home,
    EduLogin
  ]
})
@RouteConfig([
  { path: '/', name: 'root', redirectTo: ['EduLogin'], useAsDefault: true },
  { path: '/login', name: 'EduLogin', component: EduLogin },
 // { path: '/login', name: 'Login', component: BhLogin }
])
export class AppComponent {
}