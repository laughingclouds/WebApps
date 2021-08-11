import { Component, OnInit } from '@angular/core';
import { Feature } from '../../interfaces/Feature';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-feature-section',
  templateUrl: './feature-section.component.html',
  styleUrls: ['./feature-section.component.scss']
})
export class FeatureSectionComponent implements OnInit {

  features: Feature[] = [];

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
  }

  getFeatures(): void {
		this.featureService.getFeatures()
			.subscribe(features => this.features = features);
	}
}
