import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { StepperActivateEvent, StepperStep } from '@progress/kendo-angular-layout';
import { Subject, takeUntil } from 'rxjs';
import {
  StepperLabel,
  StepperLabelType,
  WaitingListStepperService,
} from 'src/app/service/waiting-list/waiting-list-stepper/waiting-list-stepper.service';

@Component({
  selector: 'waiting-list-stepper',
  templateUrl: './waiting-list-stepper.component.html',
  styleUrls: ['./waiting-list-stepper.component.scss'],
})
export class WaitingListStepperComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  @Input() title: StepperLabelType = StepperLabel.Login;
  @Input() sessionId!: string;
  @Input() disableStepper: boolean = false;
  public steps!: StepperStep[];
  public currentIndex: number = 0;
  public description!: string;
  constructor(
    private _stepper: WaitingListStepperService,
    private _router: Router
  ) {}

  ngOnInit() {
    this._stepper
      .validator()
      .pipe(takeUntil(this._destroy$))
      .subscribe(validator => {
        this._stepper.handleValidator(validator);
      });
    this._stepper
      .getStepperByShopCategory()
      .pipe(takeUntil(this._destroy$))
      .subscribe(stepper => {
        this.steps = stepper;
        this.setCurrentStepper();
      });
  }

  onChangeStep(index: number) {
    this.currentIndex = this.currentIndex !== index ? this.currentIndex : index;
  }

  private setCurrentStepper() {
    if (this.steps.length > 0) {
      let index =
        this.steps.find(s => s.label === this.title) !== undefined
          ? this.steps.findIndex(s => s.label === this.title)
          : 0;
      index = this.title === 'label.title.massageoption' ? 2 : index;
      this.currentIndex = index;
      const description =
        this.steps.find(s => s.label === this.title) !== undefined
          ? this.steps[this.steps.findIndex(s => s.label === this.title)].text
          : '';
      this.description = description !== undefined ? description : '';
    }
  }

  async activate(event: StepperActivateEvent) {
    this.onChangeStep(event.index);
    event.preventDefault();
    const selection = event.step as StepperStep;
    const selectedTitle = selection.label as StepperLabelType;
    switch (selectedTitle) {
      case StepperLabel.Login:
        await this._router.navigateByUrl(`waiting-list/${this.sessionId}`);
        break;
      case StepperLabel.ClientInfo:
        await this._router.navigateByUrl(`waiting-list/${this.sessionId}/update-client-info`);
        break;
      case StepperLabel.MassageOption:
        await this._router.navigateByUrl(`waiting-list/${this.sessionId}/update-massage-preference`);
        break;
      case StepperLabel.Cart:
        await this._router.navigateByUrl(`waiting-list/${this.sessionId}/cart`);
        break;
      case StepperLabel.CartView:
        await this._router.navigateByUrl(`waiting-list/${this.sessionId}/cart-view`);
        break;
      case StepperLabel.SelectSpecialistAndTime:
        await this._router.navigateByUrl(`waiting-list/${this.sessionId}/select-specialist-time`);
        break;
      case StepperLabel.Confirmation:
        await this._router.navigateByUrl(`waiting-list/${this.sessionId}/confirmation`);
        break;
    }
  }

  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
