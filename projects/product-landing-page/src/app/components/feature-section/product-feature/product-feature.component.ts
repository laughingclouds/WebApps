import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../interfaces/Feature';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrls: ['./product-feature.component.scss']
})
export class ProductFeatureComponent implements OnInit {

  @Input() feature!: Feature;

  constructor() { }

  ngOnInit(): void {
  }
}
