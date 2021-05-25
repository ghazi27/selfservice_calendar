/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import SA from '@angular/common/locales/ar-SA';
import { registerLocaleData } from '@angular/common';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(SA, 'ar-SA');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    NbDateFnsDateModule.forRoot({ format: 'yyyy/MM/dd HH:mm:ss' }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgbModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'ar-SA' },  // Uncomment this line to enable Hijri in OwlDateTime
  ],
})
export class AppModule {
}
