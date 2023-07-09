import { Widget } from '@fem/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class WidgetsService {
  mockWidgets: Widget[] = [
    { id: '1', title: 'Nest widget 1', description: 'Pending' },
    { id: '2', title: 'Nest widget 2', description: 'Pending' },
    { id: '3', title: 'Nest widget 3', description: 'Pending' },
    { id: '4', title: 'Nest widget 4', description: 'Pending' },
    { id: '5', title: 'Nest widget 5', description: 'Pending' },
  ];
  create(widget: Widget) {
    this.mockWidgets = [
      ...this.mockWidgets,
      Object.assign({}, widget, { id: uuidv4() }),
    ];
    return this.mockWidgets;
  }

  findAll() {
    return this.mockWidgets;
  }

  findOne(id: string) {
    return this.mockWidgets.find((widget) => widget.id === id);
  }

  update(id: string, widget: Widget) {
    this.mockWidgets = this.mockWidgets.map((w) => (w.id === id ? widget : w));
    return this.mockWidgets;
  }

  remove(id: string) {
    this.mockWidgets = this.mockWidgets.filter((widget) => widget.id !== id);
    return this.mockWidgets;
  }
}
