import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToolbarComponent } from './toolbar/toolbar/toolbar.component';
import { MaterialModule } from '@fem/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
})
export class UiToolbarModule {}
