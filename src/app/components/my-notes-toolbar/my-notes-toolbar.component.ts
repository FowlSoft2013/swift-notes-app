import {Component, EventEmitter, Input, Output} from '@angular/core';
import NoteModel from "../../models/note.model";
import {FormControl} from "@angular/forms";
import {debounce, timer} from "rxjs";

@Component({
  selector: 'app-my-notes-toolbar',
  templateUrl: './my-notes-toolbar.component.html',
  styleUrls: ['./my-notes-toolbar.component.scss']
})
export class MyNotesToolbarComponent {
  @Input() notes!: NoteModel[];
  @Output() noteSearchResultEmitter: EventEmitter<Array<NoteModel>> = new EventEmitter<Array<NoteModel>>();
  @Output() deleteQueuedNotesEmitter: EventEmitter<any> = new EventEmitter<any>();
  numberOfNotes: number = 0;
  searchTerm: string = '';
  matchedNotes: NoteModel[] = this.notes;
  searchInput: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit(){
    this.numberOfNotes = this.notes?.length;
    this.searchInput.valueChanges
      .pipe(
        debounce(() => timer(300))
      ).subscribe(s => {
        this.searchTerm = s;
        this.searchNotes();
    });
  }

  ngOnChanges(changes: any) {
    if(changes.notes)
      this.numberOfNotes = changes.notes.currentValue.length;
  }

  searchNotes() {
    this.matchedNotes = this.notes.filter(n => {
      let titleMatch = n.title.includes(this.searchTerm);
      let contentMatch = n.content?.includes(this.searchTerm);
      let listMatch = n.listItems?.find(li => li.includes(this.searchTerm));

      return titleMatch || contentMatch || listMatch || this.searchTerm == '';
    });

    this.numberOfNotes = this.matchedNotes.length;
    this.noteSearchResultEmitter.emit(this.matchedNotes);
  }
}
