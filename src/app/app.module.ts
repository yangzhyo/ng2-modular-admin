import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './layout/app-header.component';
import { AppSidebarComponent } from './layout/app-sidebar.component';
import { AppFooterComponent } from './layout/app-footer.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LogMonitorComponent } from "./monitor-center/log-monitor.component";
import { TaskMonitorComponent } from "./monitor-center/task-monitor.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    AppFooterComponent,
    DashboardComponent,
    LogMonitorComponent,
    TaskMonitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
