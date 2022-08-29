import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  estados: any;
  constructor(private service: DashboardService) {}


  ngOnInit(): void {
    this.service.findAll().subscribe(
      estados => {
      this.estados = estados;
    });
  }
}
