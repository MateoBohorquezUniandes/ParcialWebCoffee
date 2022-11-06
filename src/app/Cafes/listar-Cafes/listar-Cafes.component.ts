import { Component, OnInit } from '@angular/core';
import { Cafe } from '../Cafe'
import { CafesService } from '../Cafes.service';

@Component({
  selector: 'app-listar-Cafes',
  templateUrl: './listar-Cafes.component.html',
  styleUrls: ['./listar-Cafes.component.css']
})
export class ListarCafesComponent implements OnInit {

  cafes: Array<Cafe> = [];

  constructor(private cafesService : CafesService){}

  getCafes(): void {
    this.cafesService.getCoffees().subscribe(cafes => {
      this.cafes = cafes;
    });
  }
  ngOnInit() {
    this.getCafes();
  }

}
