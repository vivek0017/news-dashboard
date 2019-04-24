import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsModelComponent } from './news-model.component';

describe('NewsModelComponent', () => {
  let component: NewsModelComponent;
  let fixture: ComponentFixture<NewsModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
