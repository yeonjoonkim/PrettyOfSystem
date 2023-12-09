import { Injectable } from '@angular/core';
import { MassagePressureLevelService } from './massage-pressure-level/massage-pressure-level.service';
import { MassageBodyService } from './massage-body/massage-body.service';

@Injectable({
  providedIn: 'root',
})
export class MassageService {
  constructor(
    public pressureLevel: MassagePressureLevelService,
    public body: MassageBodyService
  ) {}
}
