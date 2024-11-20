import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Contrasena } from 'src/modelos/usuario.interface';


@Component({
  selector: 'app-cambio-pass',
  templateUrl: './cambio-pass.page.html',
  styleUrls: ['./cambio-pass.page.scss'],
})
export class CambioPassPage {
  contrasena: Contrasena = { nueva: '', confirmar: '' }; // Usamos la interfaz

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  async cambiarContrasena() {
    if (this.contrasena.nueva === this.contrasena.confirmar) {
      const loading = await this.loadingController.create({
        message: 'Cambiando contraseña...',
        duration: 2000,
      });

      await loading.present();

      try {
        await this.authService.cambiarContrasena(this.contrasena.nueva);
        loading.dismiss();

        const toast = await this.toastController.create({
          message: 'Contraseña cambiada con éxito',
          duration: 2000,
          position: 'top',
          color: 'success',
        });
        await toast.present();

        this.navCtrl.navigateBack('/perfil-estudiante');
      } catch (error) {
        loading.dismiss();
        console.error('Error al cambiar la contraseña:', error);

        const toast = await this.toastController.create({
          message: 'Error al cambiar la contraseña',
          duration: 2000,
          position: 'top',
          color: 'danger',
        });
        await toast.present();
      }
    } else {
      console.error('Las contraseñas no coinciden');

      const toast = await this.toastController.create({
        message: 'Las contraseñas no coinciden',
        duration: 2000,
        position: 'top',
        color: 'warning',
      });
      await toast.present();
    }
  }

  navegarPerfil() {
    this.navCtrl.navigateBack('/perfil-estudiante');
  }
}
