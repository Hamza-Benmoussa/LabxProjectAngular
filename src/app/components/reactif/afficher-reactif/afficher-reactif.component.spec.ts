import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherReactifComponent } from './afficher-reactif.component';

describe('AfficherReactifComponent', () => {
  let component: AfficherReactifComponent;
  let fixture: ComponentFixture<AfficherReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherReactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
