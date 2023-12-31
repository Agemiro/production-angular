import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '@fem/core-data';
import { Widget } from 'libs/api-interfaces/src/lib/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  constructor(private widgetService: WidgetsService) {}

  ngOnInit() {
    this.widgets$ = this.widgetService.getAll();
  }

  toggleSideNav() {}
  logout() {}
}
