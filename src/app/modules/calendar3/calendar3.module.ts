import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Calendar3RoutingModule } from './calendar3-routing.module';
import { Calendar3Component } from './calendar3.component';

import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [Calendar3Component],
  imports: [
    CommonModule,
    NgbModule,
    Calendar3RoutingModule,
    FormsModule,
    NbMenuModule,
    ThemeModule,
  ],
})
export class Calendar3Module {}
