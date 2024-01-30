import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnalyseComponent } from './add-analyse.component';

describe('AddAnalyseComponent', () => {
  let component: AddAnalyseComponent;
  let fixture: ComponentFixture<AddAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
