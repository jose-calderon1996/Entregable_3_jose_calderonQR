import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isLoggedIn: boolean = false; // Estado para alternar los botones

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private afAuth: AngularFireAuth 
  ) {}

  ngOnInit() {
    this.checkAuthenticationStatus(); // Escuchar los cambios de autenticación al cargar la página
  }

  // Método para verificar si el usuario está autenticado para luego cambiar estado de boton de login a cerrar sesión
  checkAuthenticationStatus() {
    this.afAuth.authState.subscribe((user) => {
      this.isLoggedIn = !!user; // Si hay un usuario, isLoggedIn es true; si no, false
    });
  }

  // Navegar al registro estudiantil
  navegarRegistro() {
    this.navCtrl.navigateForward('/registro-estudiantil');
  }

  // Navegar a la página de login
  navigateToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  // Navegar al perfil del usuario
  navigateperfil() {
    this.navCtrl.navigateForward('/perfil');
  }

  // Navegar al escáner QR
  navigateQR() {
    this.navCtrl.navigateForward('/scanner-qr');
  }

  // Método para cerrar sesión
  async cerrarSesion() {
    await this.authService.logout(); // Cierra sesión en Firebase
    console.log('Sesión cerrada');
  }
}
