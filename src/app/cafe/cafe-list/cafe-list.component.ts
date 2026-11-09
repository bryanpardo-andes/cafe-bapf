import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.scss']
})
export class CafeListComponent implements OnInit {
  cafes: Cafe[] = [];
  totales: [string, number][] = [];

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;

      const conteo = cafes.reduce<Record<string, number>>((acc, c) => {
        acc[c.tipo] = (acc[c.tipo] ?? 0) + 1;
        return acc;
      }, {});

      this.totales = Object.entries(conteo);
    });
  }
}
