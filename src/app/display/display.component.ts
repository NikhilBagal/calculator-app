import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  value:string
  total:string
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.shareNumber.subscribe(x => this.value = x)
    this.data.shareTotal.subscribe(x => this.total = x)
  }


}
