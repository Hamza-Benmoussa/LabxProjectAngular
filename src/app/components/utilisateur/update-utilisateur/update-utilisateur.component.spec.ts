import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUtilisateurComponent } from './update-utilisateur.component';

describe('UpdateUtilisateurComponent', () => {
  let component: UpdateUtilisateurComponent;
  let fixture: ComponentFixture<UpdateUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUtilisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
