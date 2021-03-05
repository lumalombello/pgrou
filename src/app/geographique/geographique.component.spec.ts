import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographiqueComponent } from './geographique.component';

describe('GeographiqueComponent', () => {
  let component: GeographiqueComponent;
  let fixture: ComponentFixture<GeographiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeographiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
