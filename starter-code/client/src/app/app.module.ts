import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EntryFinderService } from './entry-finder.service';
import { EntryListComponent } from './entry-list/entry-list.component';

import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleEntryComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [EntryFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
