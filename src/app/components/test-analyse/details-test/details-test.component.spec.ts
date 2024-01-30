import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTestComponent } from './details-test.component';

describe('DetailsTestComponent', () => {
  let component: DetailsTestComponent;
  let fixture: ComponentFixture<DetailsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
