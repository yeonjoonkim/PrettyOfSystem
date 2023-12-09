import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MassageBodySelectorPopoverComponent } from './massage-body-selector-popover.component';

describe('MassageBodySelectorPopoverComponent', () => {
  let component: MassageBodySelectorPopoverComponent;
  let fixture: ComponentFixture<MassageBodySelectorPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageBodySelectorPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MassageBodySelectorPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
