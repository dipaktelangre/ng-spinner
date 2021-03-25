export const DEFAULT_SPINNER_NAME = 'primary_spinner';

export enum NgSpinnerSize {
  small = '1x',
  medium = '2x',
  large = '3x',
}

export enum NgSpinnerStyle {
  regular = 'r',
  solid = 's',
  light = 'l',
  dualtone = 'd',
}

export class NgSpinnerSettings {
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

export const DEFAULTS: NgSpinnerSettings = {
  name: DEFAULT_SPINNER_NAME,
  bgColor: '#000',
  spinnerColor: '#fff',
  zIndex: 2,
  fullscreen: false,
  show: false,
  textColor: '#fff',
  spinnerIcon: 'spinner',
  spinnerSize: 'medium',
  spinnerStyle: 'solid',
};
