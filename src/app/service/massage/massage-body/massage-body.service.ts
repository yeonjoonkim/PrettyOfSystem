import { Injectable } from '@angular/core';
import { MassageBodyFrontService } from './massage-body-front/massage-body-front.service';

@Injectable({
  providedIn: 'root',
})
export class MassageBodyService {
  constructor(public front: MassageBodyFrontService) {}
}
