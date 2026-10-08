import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonInput, IonButton
} from '@ionic/angular';
import { DatosService } from '../services/datos';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: './tab1.page.html',
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonInput, IonButton
  ]
})
export class Tab1Page {
  nombre = '';
  contador = 0;
  mensaje = '';
  edad = '';

  private datos = inject(DatosService);
  private router = inject(Router);

  aumentar(): void {
    this.contador++;
  }

  disminuir(): void {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  reiniciar(): void {
    this.contador = 0;
  }

  enviar(): void {
    const nombreLimpio = this.nombre.trim();

    if (!nombreLimpio) {
      this.mensaje = 'Ingresa tu nombre antes de continuar.';
      return;
    }

    const edadLimpia = this.edad.trim();

    if (!edadLimpia) {
      this.mensaje = 'Ingresa tu edad antes de continuar.';
      return;
    }

    this.mensaje = '';
    this.datos.guardar(nombreLimpio, this.contador, edadLimpia);
    this.router.navigateByUrl('/tabs/tab2');
  }
}