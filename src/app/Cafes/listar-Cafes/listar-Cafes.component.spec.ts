/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { ListarCafesComponent } from './listar-Cafes.component';
import { Cafe } from '../Cafe'

describe('ListarCafesComponent', () => {
  let component: ListarCafesComponent;
  let fixture: ComponentFixture<ListarCafesComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ ListarCafesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCafesComponent);
    component = fixture.componentInstance;
    component.cafes = [
      new Cafe(1, faker.name.firstName(),"Blend",faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence()),
      new Cafe(1, faker.name.firstName(),"Blend",faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence()),
      new Cafe(1, faker.name.firstName(),"Blend",faker.lorem.sentence(),faker.lorem.sentence(),faker.datatype.number(),faker.lorem.sentence())
    ]
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia el encabezado tener todas sus columnas',() =>{
    const tbody = debug.query(By.css('tr'));
    const content: HTMLElement = tbody.nativeElement;
    const columns = content.querySelectorAll('th');
    expect(columns.length).toEqual(4);
  });

  it('Deberia la tabla tener tres filas', () =>{
    const tbody = debug.query(By.css('tbody'));
    const content: HTMLElement = tbody.nativeElement;
    var thtbody = content.querySelectorAll('tr')
    expect(thtbody.length).toEqual(3);

  });

  /*it('Deberia el contador de Blend esta en 3', () =>{
    fixture.detectChanges();
    component = fixture.componentInstance;
    expect(component.blend).toEqual(0);
  });*/
});
