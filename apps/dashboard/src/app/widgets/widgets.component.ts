import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
import { WidgetsFacade } from '@fem/core-state';
import { Observable } from 'rxjs';

const emptyWidget: Widget = {
  id: null,
  title: '',
  description: '',
};

@Component({
  selector: 'fem-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]> = this.widgetsFacade.widgets$;
  selectedWidget$: Observable<Widget> = this.widgetsFacade.selectedWidget$;
  constructor(private widgetsFacade: WidgetsFacade) {
    this.loadWidgets();
  }

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.loadWidgets();
    this.selectWidget(null);
  }

  resetForm() {
    // this.selectedWidget$ = emptyWidget;
    this.selectWidget(emptyWidget);
  }

  loadWidgets() {
    this.widgetsFacade.loadWidgets();
  }

  selectWidget(widget: Widget) {
    this.widgetsFacade.selectWidget(widget);
  }

  saveWidget(widget: Widget) {
    console.log('Tentou salvar');
    if (widget.id) {
      this.updateteWidget(widget);
    } else {
      this.createWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    // this.widgetsService.create(widget);
    this.resetForm();
  }

  updateteWidget(widget: Widget) {
    // this.widgetsService.update(widget);
    this.resetForm();
  }

  deleteWidget(widget: Widget) {
    //this.widgetsService.delete(widget);
    this.resetForm();
  }
}
