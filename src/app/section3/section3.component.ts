import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {
  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
  constructor() { }

  ngOnInit(): void {
      
  }

}
