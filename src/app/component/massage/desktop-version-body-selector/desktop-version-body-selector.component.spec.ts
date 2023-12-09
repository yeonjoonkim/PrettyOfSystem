import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesktopVersionBodySelectorComponent } from './desktop-version-body-selector.component';

describe('DesktopVersionBodySelectorComponent', () => {
  let component: DesktopVersionBodySelectorComponent;
  let fixture: ComponentFixture<DesktopVersionBodySelectorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DesktopVersionBodySelectorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesktopVersionBodySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
