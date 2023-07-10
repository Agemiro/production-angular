import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsFacade } from '@fem/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets$: Observable<Widget[]> = this.widgetsFacade.widgets$;

  constructor(private widgetsFacade: WidgetsFacade) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }
}
