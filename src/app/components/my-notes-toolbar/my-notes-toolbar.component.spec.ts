import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyNotesToolbarComponent} from './my-notes-toolbar.component';
import NoteModel from "../../models/note.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('MyNotesToolbarComponent', () => {
  let component: MyNotesToolbarComponent;
  let fixture: ComponentFixture<MyNotesToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotesToolbarComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNotesToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search notes should return one', () => {
    let note = new NoteModel(
      { id: '',
        title: 'My test note',
        content: 'This is note content',
        listItems: [],
        savedDate: new Date(Date.now())
      });
    component.notes = [note];
    component.searchTerm = 'is';
    component.searchNotes();

    expect(component.matchedNotes.length).toBe(1);
  });
});
