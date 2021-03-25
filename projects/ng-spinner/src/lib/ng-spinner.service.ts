import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { filter } from 'rxjs/operators';

import {
  NgSpinnerSettings,
  DEFAULTS,
  DEFAULT_SPINNER_NAME,
} from './ng-spinner.model';

class NgSpinnerState {
  name: string;
  show: boolean;
}

@Injectable({ providedIn: 'root' })
export class NgSpinnerService {
  private spinner$ = new BehaviorSubject<NgSpinnerState>(null);
  constructor() {}

  getSpinner(name: string = DEFAULT_SPINNER_NAME): Observable<NgSpinnerState> {
    return this.spinner$
      .asObservable()
      .pipe(filter((x: NgSpinnerState) => x && x.name === name));
  }

  show(name: string = DEFAULT_SPINNER_NAME): void {
    this.spinner$.next({ name, show: true });
  }

  hide(name: string = DEFAULT_SPINNER_NAME): void {
    this.spinner$.next({ name, show: false });
  }
}
