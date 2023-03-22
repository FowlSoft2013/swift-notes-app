import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-swift-note-list-add',
  templateUrl: './swift-note-list-add.component.html',
  styleUrls: ['./swift-note-list-add.component.scss']
})
export class SwiftNoteListAddComponent {
  listItem: string = '';
  listItems: string[] = [];
  @Output() listItemsChangedEmitter: EventEmitter<Array<string>> = new EventEmitter();

  constructor() {}

  addListItem(){
    this.listItems.push(this.listItem);
    this.listItem = '';
    this.listItemsChangedEmitter.emit(this.listItems);
  }
}
