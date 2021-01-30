import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngnest-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {'class': 'flex-grow-1 flex-shrink-0 mb-auto'}
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
