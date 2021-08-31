import { Component } from '@angular/core';
import { Router } from '@angular/router';

import * as bs from 'bootstrap/dist/js/bootstrap.bundle.js';

declare global {
    interface Window {
        bootstrap: any;
    }
}

window.bootstrap = bs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _router: Router){}
}