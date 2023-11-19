import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguageKeyPairSelectOptionComponent } from './language-key-pair-select-option.component';

describe('LanguageKeyPairSelectOptionComponent', () => {
  let component: LanguageKeyPairSelectOptionComponent;
  let fixture: ComponentFixture<LanguageKeyPairSelectOptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageKeyPairSelectOptionComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageKeyPairSelectOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
