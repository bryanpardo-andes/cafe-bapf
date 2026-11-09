import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Cafe } from '../cafe';
import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';

describe('CafeListComponent', () => {
  let fixture: ComponentFixture<CafeListComponent>;

  const cafes: Cafe[] = [
    new Cafe(1, 'Café Especial para tí', 'Blend', 'Angelópolis, Antioquia', 'Panela', 1920, 'img-1'),
    new Cafe(2, 'Café Especial Navegante', 'Café de Origen', 'Guatapé, Antioquia', 'Cítrico', 1800, 'img-2'),
    new Cafe(3, 'Café Especial El Prístino', 'Blend', 'Chinchiná, Caldas', 'Chocolate', 1700, 'img-3')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      providers: [
        { provide: CafeService, useValue: { getCafes: () => of(cafes) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render a table with three rows plus the header', () => {
    const filas = fixture.nativeElement.querySelectorAll('tr');

    expect(filas.length).toBe(4);
    expect(filas[0].textContent).toContain('Nombre');
    expect(filas[1].textContent).toContain('Café Especial para tí');
    expect(filas[2].textContent).toContain('Café Especial Navegante');
    expect(filas[3].textContent).toContain('Café Especial El Prístino');
  });
});
