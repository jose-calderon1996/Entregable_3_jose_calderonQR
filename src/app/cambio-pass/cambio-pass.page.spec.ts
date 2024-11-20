import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CambioPassPage } from './cambio-pass.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';

describe('CambioPassPage', () => {
  let component: CambioPassPage;
  let fixture: ComponentFixture<CambioPassPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CambioPassPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig) // Configuración mínima de Firebase
      ],
      providers: [
        AngularFireAuth // Proveedor directo sin configuración adicional
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CambioPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


//xd