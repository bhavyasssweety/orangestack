import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {
  isReadMore = false
  isReadMore2 = false
  isReadMore3 = false

  showText() {
     this.isReadMore = !this.isReadMore
  }
  showText2() {
    this.isReadMore2 = !this.isReadMore2
 }
 showText3() {
  this.isReadMore3 = !this.isReadMore3
}
  constructor() { }

  ngOnInit(): void {
      
  }

}
