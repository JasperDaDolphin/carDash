import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxGaugeModule } from 'ngx-gauge';

import { SocketService } from './core/services/socket.service';

import { DtcTableComponent } from './core/components/dtc-table/dtc-table.component';
import { RpmGaugeComponent } from './core/components/rpm-gauge/rpm-gauge.component';
import { VssGaugeComponent } from './core/components/vss-gauge/vss-gauge.component';
import { TempReaderComponent } from './core/components/temp-reader/temp-reader.component';
import { MafReaderComponent } from './core/components/maf-reader/maf-reader.component';
import { ThrottleposReaderComponent } from './core/components/throttlepos-reader/throttlepos-reader.component';

import { MainModuleComponent } from './modules/main-module/main-module.component';
import { LogTableComponent } from './core/components/log-table/log-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainModuleComponent,
    DtcTableComponent,
    RpmGaugeComponent,
    VssGaugeComponent,
    TempReaderComponent,
    MafReaderComponent,
    ThrottleposReaderComponent,
    LogTableComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, NgxGaugeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
