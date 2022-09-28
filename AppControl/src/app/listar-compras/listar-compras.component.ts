import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiComprasService } from '../api-compras.service';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit {

  compra: any[] = [];

  formulario: FormGroup = this.fb.group({
    compra: new FormControl('', [Validators.required]),
    establecimiento: new FormControl('', [Validators.required]),
    tarjeta: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
    persona: new FormControl('', [Validators.required]),
    monto: new FormControl('', [Validators.required])
  });

  compraActualizar: any;

  constructor(
    private api: ApiComprasService,
    private fb: FormBuilder
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


  update() {
    const values = this.formulario.value;
    console.log('values', values);
    this.api.update(this.compraActualizar._links.self.href, values)
      .subscribe(() => {
        this.getAll();
        this.compraActualizar = null;
        this.formulario.setValue({
          compra: '',
          establecimiento: '',
          tarjeta: '',
          fecha: '',
          persona: '',
          monto: ''
        })
      })
  }

  edit(compra: any) {
    this.compraActualizar = compra;
    this.formulario.setValue({
      compra: compra.compra,
      establecimiento: compra.establecimiento,
      tarjeta: compra.tarjeta,
      fecha: compra.fecha,
      persona: compra.persona,
      monto: compra.monto
    })
  }

  delete(compra: any) {
    const ok = confirm('¿Desea eliminar esta compra?');
    if (ok) {
      this.api.delete(compra._links.self.href)
      .subscribe(()=>{
        this.getAll();
      });
    }
  }


}
