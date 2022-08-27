import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-city',
  templateUrl: './card-city.component.html',
  styleUrls: ['./card-city.component.css']
})
export class CardCityComponent implements OnInit {

  @Input() data: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
