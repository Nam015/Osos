import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sideBar = false;
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
this.sideBar = true;
//console.log(this.sideBar);
}
}
