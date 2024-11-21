import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  color: string = 'primary';

  constructor(private navCtrl: NavController, private authService: AuthService) {}

  navegarRegistro() {
    this.navCtrl.navigateForward('/registro-estudiantil');
  }

  navigateToLogin() {
    this.navCtrl.navigateForward('/login');
  }
  navigateperfil() {
    this.navCtrl.navigateForward('/perfil');
  }
  navigateQR() {
    this.navCtrl.navigateForward('/scanner-qr');
  }

  
}
