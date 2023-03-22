import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNotePageComponent } from './manage-note-page.component';
import {AppRoutingModule} from "../../app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

describe('ManageNotePageComponent', () => {
  let component: ManageNotePageComponent;
  let fixture: ComponentFixture<ManageNotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageNotePageComponent ],
      imports: [AppRoutingModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageNotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
