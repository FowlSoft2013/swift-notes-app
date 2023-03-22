import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftNoteCardComponent } from './swift-note-card.component';

describe('SwiftNoteCardComponent', () => {
  let component: SwiftNoteCardComponent;
  let fixture: ComponentFixture<SwiftNoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftNoteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiftNoteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
