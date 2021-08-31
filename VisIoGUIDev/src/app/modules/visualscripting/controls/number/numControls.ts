import {Control} from 'rete';
import {AngularControl} from 'rete-angular-render-plugin';
import {Type} from '@angular/core';
import {NumberNgComponent} from './number-ng.component';

export class NumControl extends Control implements AngularControl {
  component: Type<NumberNgComponent>;
  props: { [key: string]: unknown };
  value = 0 ;

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = NumberNgComponent;
    this.props = {
      readonly,
      change: v => this.onChange(v),
      value: this.value,
      mounted: () => {
        console.log('mounted');
        this.setValue(+(this.getData(key) as any) || 0);
      }
    };
  }
  public getvalue() {
    return this.props.value
  }

    onChange(val: number) {
    console.log(val);
    this.setValue(val);
  }

  setValue(val: number) {
    this.props.value = +val;
    this.putData(this.key, this.props.value);
  }
}
