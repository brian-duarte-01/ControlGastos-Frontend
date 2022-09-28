import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiGastosService } from '../api-gastos.service';

@Component({
  selector: 'app-registrar-gasto',
  templateUrl: './registrar-gasto.component.html',
  styleUrls: ['./registrar-gasto.component.css']
})
export class RegistrarGastoComponent implements OnInit {

  gasto: any[] = [];

  formulario: FormGroup = this.fb.group({
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  constructor(
    private apiGasto: ApiGastosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.apiGasto.getAll()
      .subscribe((gasto: any) => {
        console.log('gasto', gasto);
        this.gasto = gasto._embedded.gasto;
      })
  }


  save() {
    if (this.formulario.valid) {
      const values = this.formulario.value;
      this.apiGasto.create(values)
        .subscribe(() => {
          this.getAll();
          this.formulario.setValue({
            nombre: '',
            fecha:'',
            monto: '',
            status: ''
          })
          confirm('Se envio correctamente!!');
        })
    } else {
      confirm('Debe de completar los campos correctamente!!');
    }
  }

  get nombre(){
    return this.formulario.get('nombre');
  }
  get fecha(){
    return this.formulario.get('fecha');
  }
  get monto(){
    return this.formulario.get('monto');
  }
  get status(){
    return this.formulario.get('status');
  }

}
