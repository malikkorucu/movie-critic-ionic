import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilteredMoviePage } from './filtered-movie.page';

describe('FilteredMoviePage', () => {
  let component: FilteredMoviePage;
  let fixture: ComponentFixture<FilteredMoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredMoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilteredMoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
