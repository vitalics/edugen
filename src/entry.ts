import { bootstrap }    from '@angular/platform-browser-dynamic';
import {ROUTER_BINDINGS, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/app.component';
 

bootstrap(AppComponent,[ROUTER_BINDINGS, ROUTER_PROVIDERS, HTTP_PROVIDERS])
.catch(err=>console.error(err));