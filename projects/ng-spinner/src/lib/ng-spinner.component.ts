import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  DEFAULTS,
  NgSpinnerSettings,
  NgSpinnerSize,
  NgSpinnerStyle,
} from './ng-spinner.model';
import { NgSpinnerService } from './ng-spinner.service';

@Component({
  selector: 'ng-spinner',
  templateUrl: './ng-spinner.component.html',
  styleUrls: ['./ng-spinner.component.scss'],
})
export class NgSpinnerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() settings: NgSpinnerSettings;

  options: NgSpinnerSettings;
  ngUnsubscribe: Subject<void> = new Subject();

  constructor(private spinnerService: NgSpinnerService) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.settings) {
      if (changes.settings.isFirstChange()) {
        this.options = {
          ...DEFAULTS,
          ...changes.settings.currentValue,
        };
      } else {
        this.options = {
          ...this.options,
          ...changes.settings.currentValue,
        };
      }
    }
    console.log(changes);
  }

  ngOnInit() {
    this.spinnerService
      .getSpinner(this.options.name)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((state) => {
        this.options = {
          ...this.options,
          show: state.show,
        };
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getIconClass(
    style: NgSpinnerStyle,
    icon: string,
    size: NgSpinnerSize
  ): string {
    if (icon) {
      return `fa${NgSpinnerStyle[style]} fa-${icon} fa-${NgSpinnerSize[size]} fa-spin`;
    }
  }
}
