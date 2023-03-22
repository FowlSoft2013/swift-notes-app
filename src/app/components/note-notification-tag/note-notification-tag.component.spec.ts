import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteNotificationTagComponent } from './note-notification-tag.component';

describe('NoteNotificationTagComponent', () => {
  let component: NoteNotificationTagComponent;
  let fixture: ComponentFixture<NoteNotificationTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteNotificationTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteNotificationTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
