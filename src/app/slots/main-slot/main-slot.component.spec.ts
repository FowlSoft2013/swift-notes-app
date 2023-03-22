import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSlotComponent } from './main-slot.component';

describe('MainSlotComponent', () => {
  let component: MainSlotComponent;
  let fixture: ComponentFixture<MainSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
