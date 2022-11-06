import { Component, OnInit } from '@angular/core';
import { Cafe } from '../Cafe'
import { CafesService } from '../Cafes.service';

@Component({
  selector: 'app-listar-Cafes',
  templateUrl: './listar-Cafes.component.html',
  styleUrls: ['./listar-Cafes.component.css']
})
export class ListarCafesComponent implements OnInit {
  blend:number = 0;
  origen:number = 0;
  cafes: Array<Cafe> = [];

  constructor(private cafesService : CafesService){}

  getCafes(): void {
    this.cafesService.getCoffees().subscribe(cafes => {
      this.cafes = cafes;
      this.getCountCoffess(cafes);
    });
  }
  getCountCoffess(array:Array<Cafe>): void {
     for(let c of array){
      if(c.tipo === "Blend"){
        this.blend = this.blend + 1;
      }
      else{
        this.origen = this.origen + 1;
      }
    }
  }
  ngOnInit() {
    this.getCafes();
  }

}
