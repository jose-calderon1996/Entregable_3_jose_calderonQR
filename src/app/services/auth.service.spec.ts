import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../../environments/environment';

// Mock básico de AngularFireAuth
const mockAngularFireAuth = {};

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig) // Inicialización de Firebase
      ],
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: mockAngularFireAuth } // Mock básico de AngularFireAuth
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
