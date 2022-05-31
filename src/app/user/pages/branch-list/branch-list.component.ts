import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
 isShow: boolean;
  back: boolean;
  constructor() { }

  ngOnInit() {
  }
 
  demo() {
  this.isShow = true;
  }

  no() {
    this.isShow = false;
  }
}
