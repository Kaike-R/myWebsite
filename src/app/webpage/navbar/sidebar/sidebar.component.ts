import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() opened:boolean;

  constructor() {   }

  ngOnInit(): void {
  }

}
