import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Widget } from '@fem/api-interfaces';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/widgets', icon: 'view_list', title: 'widgets' },
  ];

  toggleSideNav() {}
  logout() {}
}
