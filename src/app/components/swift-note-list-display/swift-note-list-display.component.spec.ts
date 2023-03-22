import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftNoteListDisplayComponent } from './swift-note-list-display.component';

describe('SwiftNoteListDisplayComponent', () => {
  let component: SwiftNoteListDisplayComponent;
  let fixture: ComponentFixture<SwiftNoteListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftNoteListDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiftNoteListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
