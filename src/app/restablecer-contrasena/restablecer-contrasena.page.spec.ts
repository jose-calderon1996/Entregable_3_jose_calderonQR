import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerContrasenaPage } from './restablecer-contrasena.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

describe('RestablecerContrasenaPage', () => {
  let component: RestablecerContrasenaPage;
  let fixture: ComponentFixture<RestablecerContrasenaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestablecerContrasenaPage],
      providers: [
        { provide: AngularFireAuth, useValue: {} }, // Mock básico para AngularFireAuth
        { provide: FIREBASE_OPTIONS, useValue: {} }, // Mock básico para FIREBASE_OPTIONS
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RestablecerContrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
