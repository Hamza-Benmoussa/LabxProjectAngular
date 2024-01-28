import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAnalyseComponent } from './type-analyse.component';

describe('TypeAnalyseComponent', () => {
  let component: TypeAnalyseComponent;
  let fixture: ComponentFixture<TypeAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAnalyseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
