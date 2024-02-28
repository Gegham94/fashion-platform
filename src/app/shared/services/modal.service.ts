import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private display: BehaviorSubject<true | false> = new BehaviorSubject(false);

  public watch(): Observable<true | false> {
    return this.display.asObservable();
  }
  public open() {
    this.display.next(true);
  }
  public close() {
    this.display.next(false);
  }
}
