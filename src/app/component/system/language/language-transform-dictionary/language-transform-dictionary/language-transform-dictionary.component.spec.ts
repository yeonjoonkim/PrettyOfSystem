import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguageTransformDictionaryComponent } from './language-transform-dictionary.component';

describe('LanguageTransformDictionaryComponent', () => {
  let component: LanguageTransformDictionaryComponent;
  let fixture: ComponentFixture<LanguageTransformDictionaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageTransformDictionaryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageTransformDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
