import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-swift-note-list-add',
  templateUrl: './swift-note-list-add.component.html',
  styleUrls: ['./swift-note-list-add.component.scss']
})
export class SwiftNoteListAddComponent {
  @Input()listItems: string[] = [];
  listItem: string = '';
  @Output() listItemsChangedEmitter: EventEmitter<Array<string>> = new EventEmitter();

  constructor() {}

  addListItem(){
    this.listItems.push(this.listItem);
    this.listItem = '';
    this.listItemsChangedEmitter.emit(this.listItems);
  }

  removeListItem(index: number) {
    let front = this.listItems.slice(0, index);
    let back = this.listItems.slice(index+1, this.listItems.length);

    this.listItems = front.concat(back);
    this.listItemsChangedEmitter.emit(this.listItems);
  }
}
