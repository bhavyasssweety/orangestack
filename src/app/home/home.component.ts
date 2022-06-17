import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public selector = true

  onSelect(){
    this.selector = !this.selector
  }

  constructor(public fb : FormBuilder) { }

  queriesForm = this.fb.group({
    userName : ['' , Validators.required],
    email : ['', Validators.required],
    message : ['']
  })

  ngOnInit(): void {
  }

  
}
