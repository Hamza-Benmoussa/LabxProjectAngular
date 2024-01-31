import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUtilisateurComponent } from './afficher-utilisateur.component';

describe('AfficherUtilisateurComponent', () => {
  let component: AfficherUtilisateurComponent;
  let fixture: ComponentFixture<AfficherUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
