import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopRatedPage } from './top-rated.page';

describe('TopRatedPage', () => {
  let component: TopRatedPage;
  let fixture: ComponentFixture<TopRatedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopRatedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
