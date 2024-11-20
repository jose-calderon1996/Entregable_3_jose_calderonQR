import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.page.html',
  styleUrls: ['./restablecer-contrasena.page.scss'],
})
export class RestablecerContrasenaPage {
  email: string = ''; // Correo electrónico ingresado por el usuario

  constructor(private afAuth: AngularFireAuth, private alertController: AlertController) {}

  async enviarEnlace() {
    if (!this.email || !this.email.includes('@')) {
      // Validar el correo ingresado
      await this.mostrarAlert('Advertencia', 'Por favor, ingresa un correo electrónico válido.');
      return;
    }

    try {
      // Enviar el enlace de restablecimiento
      await this.afAuth.sendPasswordResetEmail(this.email);
      await this.mostrarAlert(
        'Éxito',
        'Se ha enviado un enlace para restablecer tu contraseña. Revisa tu correo.'
      );
    } catch (error: any) {
      // Manejar errores comunes
      console.error('Error al enviar el enlace:', error);
      let errorMessage = 'Ocurrió un error al enviar el enlace. Inténtalo nuevamente.';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'El correo ingresado no es válido.';
      } else if (error.code === 'auth/user-not-found') {
        errorMessage = 'No existe un usuario con ese correo.';
      }
      await this.mostrarAlert('Error', errorMessage);
    }
  }

  async mostrarAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }
}
