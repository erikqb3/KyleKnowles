import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleReviewOwnerComponent } from './single-review-owner.component';

describe('SingleReviewOwnerComponent', () => {
  let component: SingleReviewOwnerComponent;
  let fixture: ComponentFixture<SingleReviewOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleReviewOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleReviewOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
