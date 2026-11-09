import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeListComponent } from './cafe-list.component';

describe('CafeListComponent', () => {
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
