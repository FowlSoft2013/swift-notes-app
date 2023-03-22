import {Component} from '@angular/core';
import NoteModel from "../../models/note.model";
import {FormControl, FormGroup} from "@angular/forms";
import {NoteService} from "../../services/note/note.service";
import {ActivatedRoute, Router} from "@angular/router";
import {concatMap, of} from "rxjs";

@Component({
  selector: 'app-create-note-page',
  templateUrl: './manage-note-page.component.html',
  styleUrls: ['./manage-note-page.component.scss']
})
export class ManageNotePageComponent {
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
    this.activatedRoute.params.pipe(
      concatMap(p => {
        this.noteId = p['noteId'];
        return of(this.noteId);
      }),
      concatMap(nId => {
        return nId ? this.noteService.getNote(nId) : of(undefined);
      })
    ).subscribe(n => {
      if(n){
        this.note = n;
        this.setNoteForm();
      }
    })
  }

  saveNote(isAddAnother: boolean) {
    let noteToSave = new NoteModel({
      id: this.noteId ? this.noteId : crypto.randomUUID(),
      title: this.createNoteForm.controls['title'].value,
      content: this.createNoteForm.controls['content'].value,
      listItems: this.listItems,
      savedDate: new Date(Date.now())
    });

    if(this.noteId)
      this.noteService.editNote(this.noteId, noteToSave)
    else
      this.noteService.saveNote(noteToSave).subscribe(() => this.isSuccess = true);

    if (isAddAnother)
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
    if (this.note?.content)
      this.createNoteForm.controls['contentType'].setValue('TEXT');
    else
      this.createNoteForm.controls['contentType'].setValue('LIST');
  }

  resetNoteFormContent() {
    if(this.createNoteForm.controls['contentType'].value == 'LIST'){
      this.createNoteForm.controls['content'].setValue('');
    }
    else{
      this.listItems = [];
    }
  }
}
