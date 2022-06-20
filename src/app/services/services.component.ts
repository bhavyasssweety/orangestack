import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public selector = true
  public forQuestion = true

  onSelect(){
    this.selector = !this.selector
  }
  forQuestionOrQuotes(){
    this.forQuestion=!this.forQuestion
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
