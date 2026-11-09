import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CafeListComponent } from './cafe-list.component';
import { CafeService } from '../cafe.service';

describe('CafeListComponent', () => {
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent],
      providers: [
        { provide: CafeService, useValue: { getCafes: () => of([]) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
