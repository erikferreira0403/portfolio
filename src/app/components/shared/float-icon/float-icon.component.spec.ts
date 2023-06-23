import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatIconComponent } from './float-icon.component';

describe('FloatIconComponent', () => {
  let component: FloatIconComponent;
  let fixture: ComponentFixture<FloatIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
