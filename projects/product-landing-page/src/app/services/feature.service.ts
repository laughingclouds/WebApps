import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feature } from '../interfaces/Feature';
import { FEATURES } from '../mock-data/mockFeatures';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  features: Feature[] = FEATURES;

  constructor() { }

  getFeatures(): Observable<Feature[]> {
    return of(this.features);
  }
}
