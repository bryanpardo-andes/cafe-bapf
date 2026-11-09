import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CafeRoutingModule } from './cafe-routing.module';
import { CafeListComponent } from './cafe-list/cafe-list.component';
import { CafeService } from './cafe.service';

@NgModule({
  declarations: [CafeListComponent],
  imports: [CommonModule, HttpClientModule, CafeRoutingModule],
  providers: [CafeService]
})
export class CafeModule {}
