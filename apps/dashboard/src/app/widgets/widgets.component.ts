import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { WidgetsService } from '@fem/core-data';
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
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;
  constructor(private widgetsService: WidgetsService) {
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
    this.selectedWidget = emptyWidget;
  }

  loadWidgets() {
    this.widgets$ = this.widgetsService.getAll();
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
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
    this.widgetsService.create(widget);
    this.resetForm();
  }

  updateteWidget(widget: Widget) {
    this.widgetsService.update(widget);
    this.resetForm();
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.delete(widget);
    this.resetForm();
  }
}
