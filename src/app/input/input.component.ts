import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  check:any
  number:string=''
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    
  }

  onClick(event:any){
    this.number = this.number + event.target.innerText
    this.data.updateNumber(this.number)
  }

  total(event:any){
    try {
      this.check = Function('"use strict";return (' + this.number + ')')();
      this.data.updateTotal(this.check)
    }catch {
       return 'error'
   }
  }

}
