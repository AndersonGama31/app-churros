import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  estados: any;
  cidades: any;

  public form: FormGroup;
  public listPontos: any[] = [];
  public selectedData: any;

  constructor(
    private service: DashboardService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      nome: [''],
      estado: [''],
      pontoVenda: [''],
      cidade: [''],
      horaAbertura: [''],
      horaFechamento: [''],
    });
  }

  public adicionarPonto(): void {
    let ponto: any = this.form.value;
    this.service.insert(ponto);
  }

  ngOnInit(): void {
    this.listPontos = this.service.findAll();
    this.states();
    this.getCidades();
  }

  states(): void {
    this.service.getStates().subscribe((estados) => {
      this.estados = estados;
    });
  }

  selectedValue(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
    };
    console.log(this.selectedData);
  }

  getCidades() {
    this.service.getCidades().subscribe((cidades) => {
      this.cidades = cidades;
    });
  }
}
