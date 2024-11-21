import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavController } from '@ionic/angular';

interface DatoAsignatura {
  seccion: string;
  fecha: string;
  estado: string;
  code?: string;  // Agregar code como propiedad opcional
}

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.page.html',
  styleUrls: ['./scanner-qr.page.scss'],
})
export class ScannerQrPage implements OnInit {
  mensaje: string = '';
  textoEscaneado: string = '';

  // Definir propiedades para las asignaturas
  datosIngles: DatoAsignatura[] = [];
  datosProgramacion: DatoAsignatura[] = [];
  datosEstadistica: DatoAsignatura[] = [];
  datosCalidad: DatoAsignatura[] = [];
  datosArquitectura: DatoAsignatura[] = [];

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private navCtrl: NavController
  ) {}

  async ngOnInit() {
    await this.cargarDatos();
  }

  // Método para escanear el código QR
  async escanear() {
    try {
      const resultado = await BarcodeScanner.scan();  // Escanear el QR

      if (resultado?.code) {
        this.textoEscaneado = resultado.code;
        console.log('Texto escaneado:', this.textoEscaneado);  // Verifica el contenido del QR
        this.mensaje = 'Código escaneado correctamente.';

        // Procesar el texto escaneado
        await this.procesarDatos(this.textoEscaneado);
      } else {
        this.mensaje = 'No se detectó contenido en el QR.';
      }
    } catch (error) {
      this.mensaje = 'Ocurrió un error durante el escaneo.';
      console.error('Error durante el escaneo:', error);
    }
  }

  // Método para procesar los datos escaneados
  async procesarDatos(texto: string) {
    try {
      const datos = JSON.parse(texto);  // Convertir el texto en un objeto JSON

      console.log('Datos procesados:', datos);  // Verifica los datos obtenidos

      // Verifica que las claves necesarias estén presentes
      if (!datos.seccion || !datos.fecha || !datos.code) {
        this.mensaje = 'El QR escaneado no contiene datos válidos.';
        console.error('Datos faltantes en el QR:', datos);
        return;
      }

      // Obtener el usuario autenticado
      const user = await this.auth.currentUser;
      if (!user) {
        this.mensaje = 'No hay un usuario autenticado.';
        console.error('No se pudo obtener el usuario actual.');
        return;
      }

      const userCollection = this.firestore.collection(`users/${user.uid}/qr-data`);

      console.log('Datos enviados a Firestore:', datos);

      // Agregar los datos a Firestore
      await userCollection.add({
        seccion: datos.seccion || 'Sin sección',
        fecha: datos.fecha || new Date().toISOString(),
        estado: 'Presente',
        code: datos.code || 'Sin código',  // Agregar el "code" al documento
      });

      // Actualiza la lista local para mostrar los datos inmediatamente
      switch (datos.seccion) {
        case 'SD008':
          this.datosIngles.push({
            seccion: datos.seccion || 'Sin sección',
            fecha: datos.fecha || new Date().toISOString(),
            estado: 'Presente',
            code: datos.code || 'Sin código',
          });
          break;
        case '002v':
          this.datosProgramacion.push({
            seccion: datos.seccion || 'Sin sección',
            fecha: datos.fecha || new Date().toISOString(),
            estado: 'Presente',
            code: datos.code || 'Sin código',
          });
          break;
        case '003v':
          this.datosEstadistica.push({
            seccion: datos.seccion || 'Sin sección',
            fecha: datos.fecha || new Date().toISOString(),
            estado: 'Presente',
            code: datos.code || 'Sin código',
          });
          break;
        case '004v':
          this.datosCalidad.push({
            seccion: datos.seccion || 'Sin sección',
            fecha: datos.fecha || new Date().toISOString(),
            estado: 'Presente',
            code: datos.code || 'Sin código',
          });
          break;
        case '005v':
          this.datosArquitectura.push({
            seccion: datos.seccion || 'Sin sección',
            fecha: datos.fecha || new Date().toISOString(),
            estado: 'Presente',
            code: datos.code || 'Sin código',
          });
          break;
        default:
          this.mensaje = 'El código escaneado no pertenece a ninguna asignatura.';
          return;
      }

      this.mensaje = `Datos agregados y guardados en Firestore: ${datos.seccion}`;
    } catch (error) {
      this.mensaje = 'El contenido escaneado no es un JSON válido.';
      console.error('Error procesando los datos del QR:', error);
    }
  }

  // Método para cargar los datos del usuario desde Firestore
  async cargarDatos() {
    try {
      const user = await this.auth.currentUser;

      if (user) {
        const userCollection = this.firestore.collection<DatoAsignatura>(`users/${user.uid}/qr-data`);

        // Escuchar cambios en la colección y asignarlos a las variables locales
        userCollection.valueChanges().subscribe((datos: DatoAsignatura[]) => {
          // Limpiar los arrays locales antes de llenarlos
          this.datosIngles = [];
          this.datosProgramacion = [];
          this.datosEstadistica = [];
          this.datosCalidad = [];
          this.datosArquitectura = [];

          // Clasificar los datos según la sección
          datos.forEach((dato) => {
            switch (dato.seccion) {
              case 'SD008':
                this.datosIngles.push(dato);
                break;
              case '002v':
                this.datosProgramacion.push(dato);
                break;
              case '003v':
                this.datosEstadistica.push(dato);
                break;
              case '004v':
                this.datosCalidad.push(dato);
                break;
              case '005v':
                this.datosArquitectura.push(dato);
                break;
            }
          });
        });
      } else {
        this.mensaje = 'No hay un usuario autenticado para cargar los datos.';
        console.error('No se pudo obtener el usuario actual al cargar los datos.');
      }
    } catch (error) {
      console.error('Error al cargar los datos desde Firestore:', error);
    }
  }

  navigateBack() {
    this.navCtrl.back();
  }

  navigateHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
