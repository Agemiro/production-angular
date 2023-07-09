import { Injectable } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
import { Subject } from 'rxjs';

@Injectable()
export class WidgetsFacade {
  private widgets = new Subject<Widget[]>();
  private selectedWidget = new Subject<Widget>();
  private mutations = new Subject();

  widgets$ = this.widgets.asObservable();
  selectedWidget$ = this.selectedWidget.asObservable();
  mutations$ = this.mutations.asObservable();

  constructor(private widgetsService: WidgetsService) {}

  selectWidget(widget: Widget) {
    this.selectedWidget.next(widget);
  }

  loadWidgets() {
    this.widgetsService
      .getAll()
      .subscribe((widgets: Widget[]) => this.widgets.next(widgets));
  }
}
