import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  hamIsX: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.hamIsX = false;
  }

  navBtnEvent(){
    if (this.hamIsX == false){
      this.hamIsX = true;
    }
    else { this.hamIsX = false}
  }

}
