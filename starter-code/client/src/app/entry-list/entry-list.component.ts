import { Component, OnInit } from '@angular/core';
import { EntryFinderService } from '../entry-finder.service';



@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryFinderService],
})
export class EntryListComponent implements OnInit {

  constructor(private finder: EntryFinderService) { }

  entries;

  ngOnInit() {
    this.finder.getEntries()
    .subscribe((entries) => {
      this.entries = entries;
    });
  }

}
