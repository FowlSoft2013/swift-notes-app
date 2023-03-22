import {Component} from '@angular/core';
import {NoteService} from "./services/note/note.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swift-notes-app';

  constructor(private noteService: NoteService) {
  }

  ngOnInit(){
    this.noteService.initNotes();
  }
}
