import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesToolbarComponent } from './my-notes-toolbar.component';

describe('MyNotesToolbarComponent', () => {
  let component: MyNotesToolbarComponent;
  let fixture: ComponentFixture<MyNotesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotesToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNotesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
