import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeRoutingModule } from './cafe-routing.module';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@NgModule({
  declarations: [CafeListComponent],
  imports: [CommonModule, CafeRoutingModule]
})
export class CafeModule {}
