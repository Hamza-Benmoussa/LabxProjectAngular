import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnalyseComponent } from './test-analyse.component';

describe('TestAnalyseComponent', () => {
  let component: TestAnalyseComponent;
  let fixture: ComponentFixture<TestAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
