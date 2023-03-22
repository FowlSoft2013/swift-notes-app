import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyNotesPageComponent} from './my-notes-page.component';
import {MyNotesToolbarComponent} from "../../components/my-notes-toolbar/my-notes-toolbar.component";
import {PaginationComponent} from "../../components/pagination/pagination.component";
import {ReactiveFormsModule} from "@angular/forms";

describe('MyNotesPageComponent', () => {
  let component: MyNotesPageComponent;
  let fixture: ComponentFixture<MyNotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotesPageComponent, MyNotesToolbarComponent, PaginationComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyNotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
