/**
 * Created by jy86 on 2017/3/8.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LogMonitorComponent } from "./monitor-center/log-monitor.component";
import { TaskMonitorComponent } from "./monitor-center/task-monitor.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'monitor/log', component: LogMonitorComponent },
  { path: 'monitor/task', component: TaskMonitorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
