import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-pricing-section',
	templateUrl: './pricing-section.component.html',
	styleUrls: ['./pricing-section.component.scss']
})
export class PricingSectionComponent implements OnInit {

	products: Product[] = [];

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts(): void {
		this.productService.getProducts()
			.subscribe(products => this.products = products);
	}
}
