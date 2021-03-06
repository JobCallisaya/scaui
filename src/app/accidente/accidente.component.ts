import {Component, Inject, OnInit} from '@angular/core';
import {Accidente, AccidenteTipo, Severidad} from '../shared/accidente';
import {AccidenteService} from '../services/accidente.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-catalog',
  templateUrl: './accidente.component.html',
  styleUrls: ['./accidente.component.scss']
})
export class AccidenteComponent implements OnInit {

  accidentes: Accidente[];
  accidentColumns = ['Nombre', 'Descripcion', 'Tipo', 'Severidad', 'Action'];
  emptyAccident = {
    id: 0,
    nombre: '',
    descripcion: '',
    tipo: '',
    severidad: ''
  };
  selectedAccident = this.emptyAccident;
  accidenteTipos = AccidenteTipo;
  severidades = Severidad;
  isNew = true;

  constructor(private accidenteService: AccidenteService,
              @Inject('BaseURL') private BaseURL) {
  }

  ngOnInit(): void {
    this.accidenteService.getItems().subscribe(accidentes => this.accidentes = accidentes);
  }

  save(): void {
    console.log('save');
    if (this.isNew) {
      this.accidenteService.save(this.selectedAccident).subscribe(
        data => {
          console.log('Create success', data);
          this.accidenteService.getItems().subscribe(accidentes => this.accidentes = accidentes);
        },
        error => {
          console.log('Create error', error);
        }
      );
    } else {
      this.accidenteService.update(this.selectedAccident).subscribe(
        data => {
          console.log('Update success', data);
          this.accidenteService.getItems().subscribe(accidentes => this.accidentes = accidentes);
        },
        error => {
          console.log('Update error', error);
        }
      );
    }

  }

  delete(element): void {
    this.accidenteService.delete(element).subscribe(
      data => {
        console.log('Delete success', data);
        this.accidenteService.getItems().subscribe(accidentes => this.accidentes = accidentes);
      }, error => {
        console.log('Delete error', error);
      });
  }

  edit(element): void {
    this.isNew = false;
    this.selectedAccident = element;
  }

  cancel(): void {
    this.isNew = true;
    this.selectedAccident = this.emptyAccident;
  }

  generateReport(): void {
    let data = document.getElementById('reportable');

    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('Accidentes.pdf'); // Generated PDF
    });
  }

  canSave(): boolean {
    return (this.selectedAccident.nombre !== ''
      && this.selectedAccident.tipo !== ''
      && this.selectedAccident.severidad !== '');
  }
}
