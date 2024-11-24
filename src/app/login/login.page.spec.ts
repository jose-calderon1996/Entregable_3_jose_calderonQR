import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from '../../environments/environment';


const mockAngularFireAuth = {
  signInWithEmailAndPassword: jasmine.createSpy('signInWithEmailAndPassword'),
  currentUser: jasmine.createSpy('currentUser').and.returnValue(Promise.resolve({ uid: 'test-uid' }))
};

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig) 
      ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth } 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
