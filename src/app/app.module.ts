import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatGridListModule, MatListModule, MatLineModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatPaginatorModule, MatDialogModule, MatButtonModule, MatProgressBar, MatProgressBarModule, MatIconModule, } from '@angular/material';
import { StatsDialogComponent } from './modals/stats-dialog/stats-dialog.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {ProgressBarModule} from "angular-progress-bar";
import {RoundProgressModule, ROUND_PROGRESS_DEFAULTS} from 'angular-svg-round-progressbar';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    StatsDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatLineModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    Ng2SearchPipeModule,
    MatIconModule,
    FormsModule,
    ProgressBarModule,
    RoundProgressModule
  ],
  providers: [{
    provide: ROUND_PROGRESS_DEFAULTS,
    useValue: {
      color: '#f00',
      background: '#0f0'
    }
  }],
  bootstrap: [AppComponent],
  entryComponents: [StatsDialogComponent],
})
export class AppModule { }
