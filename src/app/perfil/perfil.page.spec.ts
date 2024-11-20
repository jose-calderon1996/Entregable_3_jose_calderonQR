import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../../environments/environment'; // Asegúrate de que la ruta sea correcta.

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig) // Configuración de Firebase
      ],
      providers: [
        { provide: AngularFireAuth, useValue: {} } // Mock del servicio AngularFireAuth
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
