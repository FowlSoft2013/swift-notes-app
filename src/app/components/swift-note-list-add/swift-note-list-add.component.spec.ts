import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftNoteListAddComponent } from './swift-note-list-add.component';
import {FormsModule} from "@angular/forms";

describe('SwiftNoteListAddComponent', () => {
  let component: SwiftNoteListAddComponent;
  let fixture: ComponentFixture<SwiftNoteListAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiftNoteListAddComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiftNoteListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
