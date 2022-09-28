import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiComprasService } from '../api-compras.service';

@Component({
  selector: 'app-registrar-compras',
  templateUrl: './registrar-compras.component.html',
  styleUrls: ['./registrar-compras.component.css']
})
export class RegistrarComprasComponent implements OnInit {
  compra: any[] = [];

  formulario: FormGroup = this.fb.group({
    compra: new FormControl('', [Validators.required]),
    establecimiento: new FormControl('', [Validators.required]),
    tarjeta: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    persona: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required])
  });


  constructor(
    private api: ApiComprasService,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.api.getAll()
      .subscribe((compra: any) => {
        console.log('compra', compra);
        this.compra = compra._embedded.compra;
      })
  }


  save() {
    if (this.formulario.valid) {
      const values = this.formulario.value;
      this.api.create(values)
        .subscribe(() => {
          this.getAll();
          this.formulario.setValue({
            compra: '',
            establecimiento: '',
            tarjeta: '',
            fecha: '',
            persona: '',
            monto: ''
          })
        })
        confirm('Se envio correctamente!!');
    }
  }

  get compras(){
    return this.formulario.get('compra');
  }
  get establecimiento(){
    return this.formulario.get('establecimiento');
  }
  get tarjeta(){
    return this.formulario.get('tarjeta');
  }
  get fecha(){
    return this.formulario.get('fecha');
  }
  get persona(){
    return this.formulario.get('persona');
  }
  get monto(){
    return this.formulario.get('monto');
  }

}
