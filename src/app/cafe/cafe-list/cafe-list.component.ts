import { Component, OnInit } from '@angular/core';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.scss']
})
export class CafeListComponent implements OnInit {
  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(cafes => {
      console.log(cafes);
    });
  }
}
