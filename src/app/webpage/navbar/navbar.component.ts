import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  opened:boolean = false;

  sidemode(){
    this.opened = !this.opened;
  }
  
  constructor() {

  }
   

  ngOnInit(): void {
  }

}
