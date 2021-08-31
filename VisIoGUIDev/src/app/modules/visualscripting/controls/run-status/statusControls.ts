import {Control} from 'rete';
import {AngularControl} from 'rete-angular-render-plugin';
import {Type} from '@angular/core';
import {RunStatusNgComponent} from './run-status.component';

export class StatusControls extends Control implements AngularControl {
  component: Type<RunStatusNgComponent>;
  props: { [key: string]: unknown };
  value = 0 ;

  constructor(public emitter, public key, public suc,readonly = false) {
    super(key);

    this.component = RunStatusNgComponent;
    this.props = {
      readonly,
      change: v => this.onChange(v),
      value: this.value,
      success: this.suc,
      mounted: () => {
        console.log('mounted');
        this.setValue(+(this.getData(key) as any) || 0);
      }
    };
  }

  onChange(val: number) {
    console.log(val);
    this.setValue(val);
    this.emitter.trigger('process');
  }

  setValue(val: number) {
    this.props.value = val;
    this.putData(this.key, this.props.value);
  }
}
