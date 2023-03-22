import { Component } from '@angular/core';
import NoteModel from "../../models/note.model";
import {NoteService} from "../../services/note/note.service";

@Component({
  selector: 'app-my-notes-page',
  templateUrl: './my-notes-page.component.html',
  styleUrls: ['./my-notes-page.component.scss']
})
export class MyNotesPageComponent {
  notes: NoteModel[] = [];

  constructor(private noteService: NoteService) {
  }

  ngOnInit(){
    this.noteService.getNotes("").subscribe(notes => this.notes = notes);
  }
}
