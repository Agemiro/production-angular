import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CoreDataModule } from '@fem/core-data';

import { WidgetsFacade } from './widgets/widgets.facade';

export const coreStateRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, CoreDataModule, RouterModule],
  providers: [WidgetsFacade],
})
export class CoreStateModule {}
