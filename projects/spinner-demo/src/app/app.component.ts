import { Component, OnInit } from '@angular/core';
import { NgSpinnerService, NgSpinnerSettings } from '@dk/ng-spinner';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spinner';
  countries = COUNTRIES;

  spinnerSetting2: NgSpinnerSettings = {
    show: true,
    name: 'spinner3',
    spinnerIcon: 'fan',
    bgColor: '#445500',
    spinnerColor: '#ff4433',
    spinnerSize: 'large',
    spinnerStyle: 'solid',
  };

  spinnerSetting: NgSpinnerSettings = {
    name: 'spinner1',
    fullscreen: false,
    show: true,
    spinnerSize: 'large',
  };

  spinnerSetting1: NgSpinnerSettings = {
    name: 'spinner2',
    spinnerIcon: 'slash',
    show: true,
    spinnerSize: 'medium',
  };

  constructor(private spinnerService: NgSpinnerService) {}

  ngOnInit() {
    setTimeout(() => {
      this.spinnerService.hide(this.spinnerSetting1.name);
      this.spinnerSetting1.show = false;
    }, 5000);
  }

  toggleSpinner(setting: NgSpinnerSettings) {
    if (setting.show) {
      this.spinnerService.hide(setting.name);
    } else {
      this.spinnerService.show(setting.name);
    }

    setting.show = !setting.show;
  }

  toggleFullscreen() {
    let fullscreen = this.spinnerSetting.fullscreen;
    this.spinnerSetting = {
      ...this.spinnerSetting,
      fullscreen: !fullscreen,
    };
  }
}
