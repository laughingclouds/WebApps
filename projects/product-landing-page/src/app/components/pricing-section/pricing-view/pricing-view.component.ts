import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-pricing-view',
  templateUrl: './pricing-view.component.html',
  styleUrls: ['./pricing-view.component.scss']
})
export class PricingViewComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
