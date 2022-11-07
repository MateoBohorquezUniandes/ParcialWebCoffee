import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { ListarCafesComponent } from './Cafes/listar-Cafes/listar-Cafes.component'

describe('AppComponent', () => {
  let debug: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientModule
      ],
      declarations: [
        AppComponent, ListarCafesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ParcialWebCoffee'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ParcialWebCoffee');
  });
  it('Deberia tener un H1 con "El aroma mágico"',() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    debug = fixture.debugElement;
    const h1 = debug.query(By.css('h1'));
    const content: HTMLElement = h1.nativeElement;
    expect(content.textContent).toEqual('El aroma mágico');
  })
});
