import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Widget } from '@fem/api-interfaces';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  widgets$ = this.http.get<Widget[]>('/api/widgets');

  constructor(private http: HttpClient) {}

  toggleSideNav() {}
  logout() {}
}
