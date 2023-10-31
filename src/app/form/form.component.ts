import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      SBoleta: '0',
      Sorteo: '0',
      TDocumento: '0',
      NDocumento: '',
      Nombres: '',
      PApellido: '',
      MApellido: '',
      NFecha: '',
      Genero: '0',
      Celular: '',
    });
  }

  onSubmit() {
    const formData = this.formulario.value;
    console.log('Datos del formulario:', formData);
  }
}
