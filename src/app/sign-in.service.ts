/**
 * Title: sign-in.service.ts
 * Author: Richard Krasso
 * Modified by: Patrick Cuauro
 * Date: 09/19/2023
 * Description: sign-in service
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
    //take in consideration the function .some
  }
}
