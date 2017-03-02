import { Routes } from '@angular/router';
import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component'
import { NewEntryComponent } from './new-entry/new-entry.component'

export const routes: Routes = [
    { path: 'entry/:id', component: SingleEntryComponent },
    { path: 'new', component: NewEntryComponent},
    { path: '', component: EntryListComponent },
    { path: '**', redirectTo: '' }
];
