import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  title:string = 'Pagina no encontrada';

  constructor() { }

  ngOnInit(): void {
  }

}
