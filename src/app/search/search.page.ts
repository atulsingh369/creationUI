import { Component, OnInit } from '@angular/core';

import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  component = HomePage;
}
