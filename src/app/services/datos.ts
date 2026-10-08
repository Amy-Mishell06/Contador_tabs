import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  nombre = signal('');
  contador = signal(0);
  enviado = signal(false);
  edad = signal('');

  guardar(nombre: string, contador: number, edad: string): void {
    this.nombre.set(nombre);
    this.edad.set(edad);
    this.contador.set(contador);
    this.enviado.set(true);
  }
}