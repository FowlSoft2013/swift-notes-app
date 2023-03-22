import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftNoteCardComponent } from './swift-note-card.component';
import NoteModel from "../../models/note.model";
import {SwiftNoteListDisplayComponent} from "../swift-note-list-display/swift-note-list-display.component";
import {AppRoutingModule} from "../../app-routing.module";

describe('SwiftNoteCardComponent', () => {
  let component: SwiftNoteCardComponent;
  let fixture: ComponentFixture<SwiftNoteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftNoteCardComponent, SwiftNoteListDisplayComponent ],
      imports: [AppRoutingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiftNoteCardComponent);
    component = fixture.componentInstance;

    let note = new NoteModel({
      id: '',
      title: 'This is a test note title',
      content: '',
      listItems: ['Do the dishes', 'Make the bed', 'Win big'],
      savedDate: new Date(Date.now())
    });
    component.note = note;

    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
