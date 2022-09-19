import { StockService } from './services/stock.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StockComponent } from './components/stock/stock.component';
import { SectorService } from './services/sector.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DatePipe } from '@angular/common';
import { SymbolSortPipe } from './pipes/symbol-sort.pipe';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockComponent,
    NavigationComponent,
    SymbolSortPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [SectorService, StockService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
