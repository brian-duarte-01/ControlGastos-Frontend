import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiGastosService } from '../api-gastos.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit {
  gasto: any[] = [];

  formulario: FormGroup = this.fb.group({
    nombre: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  gastoActualizar: any;


  constructor(
    private apiGasto: ApiGastosService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  //listar

  getAll(): void {
    this.apiGasto.getAll()
      .subscribe((gasto: any) => {
        console.log('gasto', gasto);
        this.gasto = gasto._embedded.gasto;
      })
  }


  update() {
    const values = this.formulario.value;
    console.log('values', values);
    this.apiGasto.update(this.gastoActualizar._links.self.href, values)
      .subscribe(() => {
        this.getAll();
        this.gastoActualizar = null;
        this.formulario.setValue({
          nombre: '',
          fecha: '',
          monto: '',
          status: ''
        })
      })
  }

  edit(gasto: any) {
    this.gastoActualizar = gasto;
    this.formulario.setValue({
      nombre: gasto.nombre,
      fecha: gasto.fecha,
      monto: gasto.monto,
      status: gasto.status
    })
  }


  delete(gasto: any) {
    const ok = confirm('¿Deseas eliminar este Gasto?');
    if (ok) {
      this.apiGasto.delete(gasto._links.self.href)
      .subscribe(() =>{
        this.getAll();
      });
    }
  }

}
