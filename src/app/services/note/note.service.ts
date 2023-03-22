import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import NoteModel from "../../models/note.model";

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private readonly noteRepoKey: string = 'swift-app-notes-repo';
  myNotes: BehaviorSubject<Array<NoteModel>> = new BehaviorSubject<Array<NoteModel>>([]);

  constructor() { }

  initNotes(){
    let currentNotes = this.getCurrentNotes();
    this.myNotes.next(currentNotes);
  }

  deleteNote(noteId: string): Observable<boolean>{
    let currentNotes = this.getCurrentNotes();
    currentNotes = currentNotes.filter(n => n.id != noteId);

    this.storeAndEmitNotes(currentNotes);

    return of(true);
  }

  deleteNotes(noteIds: string[]): Observable<boolean>{
    console.log(noteIds);
    let currentNotes = this.getCurrentNotes();
    currentNotes = currentNotes.filter(n => !noteIds.includes(n.id));

    this.storeAndEmitNotes(currentNotes);

    return of(true);
  }

  editNote(noteId: string, note: NoteModel): Observable<NoteModel>{
    let currentNotes = this.getCurrentNotes();
    let noteIndex = currentNotes.findIndex(n => n.id = noteId);

    currentNotes[noteIndex].title = note.title;
    currentNotes[noteIndex].content = note.content;
    currentNotes[noteIndex].listItems = note.listItems;

    this.myNotes.next(currentNotes);

    return of(note);
  }

  saveNote(note: NoteModel): Observable<NoteModel> {
    let currentNotes = this.getCurrentNotes();
    currentNotes.push(note);

    this.storeAndEmitNotes(currentNotes);

    return of(note);
  }

  getNote(noteId: string): Observable<NoteModel | undefined> {
    let currentNotes = this.getCurrentNotes();
    let note = currentNotes.find(n => n.id == noteId);

    return of(note);
  }

  getNotes(): Observable<Array<NoteModel>> {
    let currentNotes = this.getCurrentNotes();
    this.myNotes.next(currentNotes);

    return of(currentNotes);
  }

  private getCurrentNotes(): NoteModel[] {
    let notesData = localStorage.getItem(this.noteRepoKey);
    if(notesData)
      return JSON.parse(notesData);

    return [];
  }

  private storeAndEmitNotes(notes: NoteModel[]){
    localStorage.setItem(this.noteRepoKey, JSON.stringify(notes));
    this.myNotes.next(notes);

  }
}
