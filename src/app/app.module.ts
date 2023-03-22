import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageNotePageComponent } from './pages/manage-note-page/manage-note-page.component';
import { MyNotesPageComponent } from './pages/my-notes-page/my-notes-page.component';
import { SwiftNoteCardComponent } from './components/swift-note-card/swift-note-card.component';
import { MainSlotComponent } from './slots/main-slot/main-slot.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SwiftNoteListAddComponent } from './components/swift-note-list-add/swift-note-list-add.component';
import { SwiftNoteListDisplayComponent } from './components/swift-note-list-display/swift-note-list-display.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MyNotesToolbarComponent } from './components/my-notes-toolbar/my-notes-toolbar.component';
import { NoteNotificationTagComponent } from './components/note-notification-tag/note-notification-tag.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ManageNotePageComponent,
    MyNotesPageComponent,
    SwiftNoteCardComponent,
    MainSlotComponent,
    SwiftNoteListAddComponent,
    SwiftNoteListDisplayComponent,
    PaginationComponent,
    MyNotesToolbarComponent,
    NoteNotificationTagComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
