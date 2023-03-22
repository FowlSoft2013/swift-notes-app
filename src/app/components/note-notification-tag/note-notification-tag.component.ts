import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-note-notification-tag',
  templateUrl: './note-notification-tag.component.html',
  styleUrls: ['./note-notification-tag.component.scss'],
  animations: [
    trigger('flyInTrigger',[
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateX(100%)' }))
      ])
    ]),
  ]
})
export class NoteNotificationTagComponent {
  @Input() isSuccess: boolean = false;
  @Output() isSuccessEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnChanges(changes: any) {
    if(changes.isSuccess.currentValue)
      setTimeout(() => {
        this.isSuccess = false;
        this.isSuccessEmitter.emit(this.isSuccess);
      }, 1000);
  }
}
