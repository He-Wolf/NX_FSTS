import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngnest-to-implement',
  templateUrl: './to-implement.component.html',
  styleUrls: ['./to-implement.component.css'],
  host: {'class': 'flex-grow-1 flex-shrink-0 mb-auto'}
})
export class ToImplementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
