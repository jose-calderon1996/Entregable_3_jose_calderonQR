import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEstudiantilPage } from './registro-estudiantil.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../../environments/environment';

// Mock del servicio AngularFireAuth
const mockAngularFireAuth = {
  createUserWithEmailAndPassword: jasmine.createSpy('createUserWithEmailAndPassword'),
  currentUser: jasmine.createSpy('currentUser').and.returnValue(Promise.resolve({ uid: 'test-uid' }))
};

describe('RegistroEstudiantilPage', () => {
  let component: RegistroEstudiantilPage;
  let fixture: ComponentFixture<RegistroEstudiantilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroEstudiantilPage],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig) // Configuración de Firebase
      ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth } // Mock de AngularFireAuth
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroEstudiantilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
