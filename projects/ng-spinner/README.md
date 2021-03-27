# NgSpinner

Angular spinner component using font awesome icons for spinner. This is evry light weight and clean spinner component. It provide only elegent settings to customize the spinner.

You can use thousands spinner icons from Font Awesome !!!

## Dependencies

Its depends Bootstrap and Font Awesome. So before you start please install bootstrap and font-awesome-free / font-awesome-pro if not installed.

```
$ npm install --save bootstrap @fortawesome/fontawesome-free
```

import bootstrap and font-awesome style to application

```
//style.scss

/* You can add global styles to this file, and also import other style files */

@import "~bootstrap/scss/bootstrap.scss";
@import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
@import "@fortawesome/fontawesome-free/scss/solid.scss";
@import "@fortawesome/fontawesome-free/scss/regular.scss";
```

## Features

- **Angular 10** Support
- Multiple Spinners icons from font awesome
- Configurable option through service
- Fullscreen Mode(Enable/Disable)
- `show()/hide()` methods
- Dynamic `z-index`

## Build/Run

`npm start`

## Demo

Check demo project

## Complete tutorial how to build spinner from scratch

[![Angular spinner example](http://img.youtube.com/vi/slsK2wXUah0/0.jpg)](http://www.youtube.com/watch?v=slsK2wXUah0 "Angular create spinner component full tutorial")

## Installation

`ng-spinner` is available via [npm](https://www.npmjs.com/package/@dipaktelangre/ng-spinner)

Using npm:

```bash
$ npm install @dipaktelangre/ng-spinner --save
```

## Usage

Import `NgSpinnerModule` in in the root module(`AppModule`):

```typescript
import { NgModule } from "@angular/core";
// Import library module
import { NgSpinnerModule } from "ng-spinner";

@NgModule({
  imports: [NgSpinnerModule],
  schemas: [],
})
export class AppModule {}
```

Add `NgSpinnerService` service wherever you want to use the `ng-spinner`.

```typescript
import { NgSpinnerService } from "ng-spinner";

class AppComponent implements OnInit {
  constructor(private spinnerService: NgSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinnerService.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinnerService.hide();
    }, 5000);
  }
}
```

Now use in your template

```html
<ng-spinner> Any loding message here </ng-spinner>
```

See [Demo](#demo)

## Methods

- `NgSpinnerService.show(name)` Shows the spinner
- `NgSpinnerService.hide(name)` Hides the spinner

## Available Settings

```typescript
SpinnerSettings {
  name: string;
  bgColor?: string;
  zIndex?: number;
  textColor?: string;
  fullscreen?: boolean;
  show?: boolean;
  spinnerColor?: string;
  spinnerIcon?: string;
  spinnerSize?: 'small' | 'medium' | 'large';
  spinnerStyle?: 'regular' | 'solid' | 'light' | 'dualtone';
}
```

Settings props

- **[show]**: `true` | `false`.
  To show/hide spinner on init, default `false`

- **[bgColor]**: #RGB color format.
  To set background-color for backdrop, default `#000`

- **[spinnerSize]**: Anyone from `small`, `medium`, `large`.
  To set size of spinner, default `medium`
- **[spinnerColor]**: Any css color format.
  To set color of spinner, default `#fff`

- **[spinnerStyle]**: Choose any font-awesome icon style from `regular` | `solid` | `light` | `dualtone`.
  To set type of spinner, default `solid`

- **[fullScreen]**: `true` or `false`
  To enable/disable fullscreen mode(overlay), default `false`

- **[name]**: For multiple spinners
  To set name for spinner, default `primary_spinner`

- **[zIndex]**: For dynamic z-index
  To set z-index for the spinner, default `2`

#### Using Spinner Type

```html
<app-spinner [settings]="spinnerSetting"> Default loader ... </app-spinner>
```

```typescript
spinnerSetting: SpinnerSettings = {
  name: "spinner1",
  fullscreen: false,
  show: true,
  spinnerSize: "large",
};
```

```javascript
this.spinner.show("spinner1");
```

## Creator

#### [Dipak Telangre](mailto:dipaktelangre@gmail.com)

### License

@dipaktelangre/ng-spinner is [MIT licensed](./LICENSE).
