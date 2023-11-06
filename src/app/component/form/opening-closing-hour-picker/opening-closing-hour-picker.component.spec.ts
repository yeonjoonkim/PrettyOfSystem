import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpeningClosingHourPickerComponent } from './opening-closing-hour-picker.component';

describe('OpeningClosingHourPickerComponent', () => {
  let component: OpeningClosingHourPickerComponent;
  let fixture: ComponentFixture<OpeningClosingHourPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [OpeningClosingHourPickerComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(OpeningClosingHourPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
