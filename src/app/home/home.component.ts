import {Component, OnInit} from '@angular/core';
import {Accidente} from '../shared/accidente';
import {AccidenteService} from '../services/accidente.service';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  item: Accidente;
  employee: Employee;

  constructor(private itemService: AccidenteService,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.itemService.getFeaturedItem()
      .subscribe(item => this.item = item);
    this.employeeService.getFeaturedEmployee()
      .then(employee => this.employee = employee);
  }

}
