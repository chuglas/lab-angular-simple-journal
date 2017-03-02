import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryFinderService } from '../entry-finder.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry = {};

  constructor(
    private route: ActivatedRoute,
    private finder: EntryFinderService
  ) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
        this.getEntry(params['id']);
      })
  }

  getEntry(id) {
    this.finder.get(id)
    .subscribe((entry) => {
      this.entry = entry;
      console.log('hey:  ', this.entry);
    });
  }

}
