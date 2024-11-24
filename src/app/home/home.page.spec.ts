import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment'; // Ajusta el path según tu proyecto
import { HomePage } from './home.page';
import { of } from 'rxjs'; // Para emitir valores en un observable

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  // Mock de AngularFireAuth
  const mockAngularFireAuth = {
    authState: of(null), // Simula que no hay usuario autenticado (emite null)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializa Firebase
      ],
      providers: [
        { provide: AngularFirestore, useValue: {} },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth }, 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // prueba initaria que verifica si el usuario esta logeado o no 
  it('should set isLoggedIn to false if no user is logged in', () => {
    component.checkAuthenticationStatus(); // Llamamos al método que verifica el estado de autenticación
    expect(component.isLoggedIn).toBeFalse(); // Verificamos que isLoggedIn sea falso cuando no hay usuario
  });

  
});
