import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListingVPage } from './listing-v.page';

describe('ListingVPage', () => {
  let component: ListingVPage;
  let fixture: ComponentFixture<ListingVPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingVPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListingVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
