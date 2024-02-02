import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNormeComponent } from './update-norme.component';

describe('UpdateNormeComponent', () => {
  let component: UpdateNormeComponent;
  let fixture: ComponentFixture<UpdateNormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNormeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
