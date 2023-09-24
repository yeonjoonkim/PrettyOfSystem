import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingLanguageSelectionComponent } from './booking-language-selection.component';

describe('KeyPairValueDropdownSingleSelectionComponent', () => {
  let component: BookingLanguageSelectionComponent;
  let fixture: ComponentFixture<BookingLanguageSelectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BookingLanguageSelectionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingLanguageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
