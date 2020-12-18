import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingCPage } from './listing-c.page';

describe('ListingCPage', () => {
  let component: ListingCPage;
  let fixture: ComponentFixture<ListingCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
