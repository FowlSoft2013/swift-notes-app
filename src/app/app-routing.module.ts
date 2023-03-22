import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageNotePageComponent} from "./pages/manage-note-page/manage-note-page.component";
import {MyNotesPageComponent} from "./pages/my-notes-page/my-notes-page.component";

const routes: Routes = [
  {path: 'note', component: ManageNotePageComponent },
  {path: 'note/:noteId', component: ManageNotePageComponent },
  {path: '', component: MyNotesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
