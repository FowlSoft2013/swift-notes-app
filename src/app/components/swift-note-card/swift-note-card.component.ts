import {Component, EventEmitter, Input, Output} from '@angular/core';
import NoteModel from "../../models/note.model";

@Component({
  selector: 'app-swift-note-card',
  templateUrl: './swift-note-card.component.html',
  styleUrls: ['./swift-note-card.component.scss']
})
export class SwiftNoteCardComponent {
  @Input() note!: NoteModel;
  @Output() deleteNoteEventEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() queueForDeletionEmitter: EventEmitter<string> = new EventEmitter<string>();
  isQueuedForDeletion: boolean = false;
  constructor() {
  }

  setIsQueuedForDeletion(){
    this.isQueuedForDeletion = !this.isQueuedForDeletion;
    this.queueForDeletionEmitter.emit(this.note.id);
  }

  getFormattedSavedDate(): string {
    return new Date(this.note.savedDate).toLocaleDateString(
      'en-US',
      {hour: '2-digit', minute: '2-digit'}
    );
  }
}
