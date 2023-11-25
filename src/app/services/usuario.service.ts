import { Injectable } from '@angular/core';
import { usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listUsuarios: usuario[] = [
    {usuario: 'JPerez', nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'MCano', nombre: 'Mariana', apellido: 'Cano', sexo: 'Femenino'},
    {usuario: 'MCano', nombre: 'Marlon', apellido: 'Cano', sexo: 'Masculino'},
    {usuario: 'CZapata', nombre: 'Carolina', apellido: 'Zapata', sexo: 'Femenino'},
    {usuario: 'DZapata', nombre: 'David', apellido: 'Zapata', sexo: 'Masculino'},
    {usuario: 'EMontoya', nombre: 'Esteban', apellido: 'Montoya', sexo: 'Masculino'},
  ];
  constructor() { }

  getUsuarioId(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index : number){
    this.listUsuarios.splice(index, 1)
  }

  agregarUsuario(usuario: usuario){
    this.listUsuarios.unshift(usuario);
  }

}
