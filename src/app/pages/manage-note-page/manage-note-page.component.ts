import {Component} from '@angular/core';
import NoteModel from "../../models/note.model";
import {FormControl, FormGroup} from "@angular/forms";
import {NoteService} from "../../services/note/note.service";
import {ActivatedRoute, Router} from "@angular/router";
import {concatMap, map, of, pluck} from 'rxjs';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.scss']
})
export class CreateNotePageComponent {
  noteId?: string;
  note?: NoteModel;
  createNoteForm: FormGroup = new FormGroup({
    title: new FormControl(),
    contentType: new FormControl('TEXT'),
    content: new FormControl()
  });
  listItems: string[] = [];
  isSuccess: boolean = false;
  isError: boolean = false;


  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private noteService: NoteService) {
  }

  ngOnInit() {
  }

  saveNote(isAddAnother: boolean){
    let noteToSave = new NoteModel({
      id: crypto.randomUUID(),
      title: this.createNoteForm.controls['title'].value,
      content: this.createNoteForm.controls['content'].value,
      listItems: this.listItems
    });
    this.noteService.saveNote(noteToSave).subscribe(() => this.isSuccess = true);

    if(isAddAnother)
      this.createNoteForm.reset();
    else
      this.router.navigateByUrl('');
  }

  setListItems(e: string[]) {
    this.listItems = e;
  }

  setNoteForm() {
    this.createNoteForm.controls['title'].setValue(this.note?.title);
    this.createNoteForm.controls['content'].setValue(this.note?.content);
    this.listItems = this.note?.listItems ? this.note.listItems : [];
    if(this.note?.content)
      this.createNoteForm.controls['contentType'].setValue('TEXT');
    else
      this.createNoteForm.controls['contentType'].setValue('LIST');
  }
}
