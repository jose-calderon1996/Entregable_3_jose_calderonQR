

export interface usuario {
    nombre: string;               
    correo: string;                
    carrera: string;               
    contrasena: string;            
    confirmarContrasena: string;   
  }


export interface PerfilEstudiante {
  nombre: string;
  comuna: string;
  direccion: string;
  fechaNacimiento: string;
  carrera: string;
  fechaIngreso: string;
}

export interface User {
  nombre: string;
  comuna: string;
  direccion: string;
  fechaNacimiento: string;
  carrera: string;
}

export interface RegistroUsuario {
  nombre: string;
  comuna: string;
  direccion: string;
  fechaNacimiento: string;
  carrera: string;
  correo: string;
  contrasena: string;
}

// contrasena 
export interface Contrasena {
  nueva: string;
  confirmar: string;
}


