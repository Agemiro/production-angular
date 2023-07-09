import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;
  constructor(private widgetsService: WidgetsService) {
    this.widgets$ = this.widgetsService.getAll();
  }
}
