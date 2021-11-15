import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';
import { StaticGraphComponent } from './presentation/views/static-graph/static-graph.component';
import { SharedModule } from '../shared/shared.module';
import { MovieComponent } from './presentation/views/movie/movie.component';

@NgModule({
  declarations: [PageDashboardComponent, StaticGraphComponent, MovieComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  exports: [PageDashboardComponent],
})
export class DashboardModule {}
