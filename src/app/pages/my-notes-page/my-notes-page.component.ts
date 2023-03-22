import {Component} from '@angular/core';
import NoteModel from "../../models/note.model";
import {NoteService} from "../../services/note/note.service";

@Component({
  selector: 'app-my-notes-page',
  templateUrl: './my-notes-page.component.html',
  styleUrls: ['./my-notes-page.component.scss']
})
export class MyNotesPageComponent {
  notes: NoteModel[] = [];
  notesForCurrentPage: NoteModel[] = [];
  matchedNotes: NoteModel[] = []
  notesQueuedForDeletion: string[] = [];

  constructor(private noteService: NoteService) {
  }

  ngOnInit() {
    this.noteService.myNotes.subscribe(n => {
      n.sort((a, b) => new Date(b.savedDate).getTime() - new Date(a.savedDate).getTime());
      this.notes = n
      this.matchedNotes = this.notes;
      this.setNotesForCurrentPage(this.notes);
    });
  }

  deleteNote(noteId: string){
    this.noteService.deleteNote(noteId).subscribe();
  }

  deleteQueuedNotes(){
    this.noteService.deleteNotes(this.notesQueuedForDeletion).subscribe();
  }

  setNotesForCurrentPage(notes: any[]) {
    this.notesForCurrentPage = notes;
    window.scrollTo(0, 0);
  }

  setNotesQueuedForDeletion(noteId: string){
    let existingNoteId = this.notesQueuedForDeletion.find(nId => nId == noteId);

    if(existingNoteId)
      this.notesQueuedForDeletion = this.notesQueuedForDeletion.filter(nId => nId != noteId);
    else
      this.notesQueuedForDeletion.push(noteId);
  }

  setSearchedNotes(notes: NoteModel[]){
      this.matchedNotes = notes;
      this.setNotesForCurrentPage(this.matchedNotes);
  }
}
