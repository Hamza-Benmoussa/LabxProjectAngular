import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherNormeComponent } from './afficher-norme.component';

describe('AfficherNormeComponent', () => {
  let component: AfficherNormeComponent;
  let fixture: ComponentFixture<AfficherNormeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherNormeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherNormeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
