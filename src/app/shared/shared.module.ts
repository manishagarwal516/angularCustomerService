import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map/map.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

@NgModule({
  declarations: [
    MapComponent,
	PaginationComponent,
	CapitalizePipe,
  ],
  imports: [
  	CommonModule
  ],
  exports: [
  	MapComponent, PaginationComponent, CapitalizePipe
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }