import { Component, OnInit } from '@angular/core';

import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { Food } from '../../interfaces/Food';
import { Continent } from '../../interfaces/Continent';

const newDefaults: MatFormFieldDefaultOptions = {
  appearance: 'fill',
  hideRequiredMarker: true,
  floatLabel: 'auto'
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: newDefaults
    },
  ]
})
export class FormComponent implements OnInit {

  continents: Continent[] = [
    { value: 'asia' },
    { value: 'europe' },
    { value: 'africa' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
