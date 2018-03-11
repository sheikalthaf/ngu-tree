import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreedHeaderComponent } from './treed-header/treed-header.component';
import { TreedBodyComponent } from './treed-body/treed-body.component';
import { TreedGroupComponent } from './treed-group/treed-group.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreedHeaderComponent, TreedBodyComponent, TreedGroupComponent],
  exports: [TreedHeaderComponent, TreedBodyComponent, TreedGroupComponent]
})
export class NguTreedModule { }
