import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientMassagePreferenceEditorComponent } from './client-massage-preference-editor.component';

describe('ClientMassagePreferenceEditorComponent', () => {
  let component: ClientMassagePreferenceEditorComponent;
  let fixture: ComponentFixture<ClientMassagePreferenceEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMassagePreferenceEditorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientMassagePreferenceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
