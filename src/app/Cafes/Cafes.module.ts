import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCafesComponent } from './listar-Cafes/listar-Cafes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListarCafesComponent],
  exports:[ListarCafesComponent]
})
export class CafesModule { }
