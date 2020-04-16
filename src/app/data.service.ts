import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 /* private fullNum = new Subject<number>();
  private data = new Subject<number>();
  private total = new Subject<string>();
  private fullString = new Subject<string>();
 
  public share = this.data.asObservable();
  public shareFullNum = this.fullNum.asObservable();
  public shareTotal = this.total.asObservable();
  public shareString = this.fullString.asObservable();*/

  private number = new Subject<string>();
  private total = new Subject<string>();

  public shareTotal = this.total.asObservable();
  public shareNumber = this.number.asObservable();

  updateNumber(num:string){
    this.number.next(num)
  }

  updateTotal(num:string){
    this.total.next(num)
  }
 
}
