import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMenuCategoryContentComponent } from './add-menu-category-content.component';

describe('AddMenuCategoryContentComponent', () => {
  let component: AddMenuCategoryContentComponent;
  let fixture: ComponentFixture<AddMenuCategoryContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuCategoryContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMenuCategoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
