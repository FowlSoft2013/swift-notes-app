import {Component, Input} from '@angular/core';
import NoteModel from "../../models/note.model";

@Component({
  selector: 'app-swift-note-card',
  templateUrl: './swift-note-card.component.html',
  styleUrls: ['./swift-note-card.component.scss']
})
export class SwiftNoteCardComponent {
  @Input() note!: NoteModel;
}
