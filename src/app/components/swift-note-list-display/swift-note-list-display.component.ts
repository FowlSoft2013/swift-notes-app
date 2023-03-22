import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-swift-note-list-display',
  templateUrl: './swift-note-list-display.component.html',
  styleUrls: ['./swift-note-list-display.component.scss']
})
export class SwiftNoteListDisplayComponent {
  @Input() listItems!: string[];
}
