import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'widgets', component: WidgetsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
