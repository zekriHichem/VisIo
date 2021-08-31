import {Control} from 'rete';
import {AngularControl} from 'rete-angular-render-plugin';
import {Type} from '@angular/core';
import {LoadingNgComponent} from './loading-ng.component';
import {FormControl} from '@angular/forms';

export class LoadingControls extends Control implements AngularControl {
  component: Type<LoadingNgComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public key) {
    super(key);
    console.log('const');
    this.component = LoadingNgComponent;
    this.props = {
      change: (v) => this.onChange(v),
      value: true,
      v: null,
      mounted: () => {
        console.log('mounted');
      }
    };

  }

  public getvalue(){
    return this.props.v;
  }
  onChange(val) {
    console.log(val);
    this.setValue(val);
   // this.emitter.trigger('process');
  }

  setValue(val: any) {
    this.props.v = val;
    this.putData(this.key, this.props.v);
  }
}
