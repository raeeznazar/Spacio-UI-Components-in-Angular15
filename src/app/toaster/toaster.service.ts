import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }


  private toasterSubject = new BehaviorSubject<{ message: string, type: string }>({ message: '', type: '' });

  getToaster(): Observable<{ message: string, type: string }> {
    return this.toasterSubject.asObservable();
  }

  showToaster(message: string, type: string): void {
    this.toasterSubject.next({ message, type });
  }
}
