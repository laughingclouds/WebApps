import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/Product';
import { PRODUCTS } from '../mock-data/mockProducts';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	products: Product[] = PRODUCTS;

	constructor() { }

	getProducts(): Observable<Product[]> {
		return of(this.products);
	}
}
