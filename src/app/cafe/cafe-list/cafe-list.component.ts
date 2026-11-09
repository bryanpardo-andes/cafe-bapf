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

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
    });
  }
}
