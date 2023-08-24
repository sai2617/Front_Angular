import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class SharedDataService {
  private employeeName: string = '';

  setEmployeeName(name: string): void {
    this.employeeName = name;
  }

  getEmployeeName(): string {
    return this.employeeName;
  }
}
