import {Control} from 'rete';
import {AngularControl} from 'rete-angular-render-plugin';
import {Type} from '@angular/core';
import {SelectNgComponent} from './select-ng.component';
import {FormControl} from '@angular/forms';

export class SelectControls extends Control implements AngularControl {
  component: Type<SelectNgComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public key, public listdata) {
    super(key);
    console.log('const');
    this.component = SelectNgComponent;
    this.props = {
      change: (v) => this.onChange(v),
      value: this.listdata,
      selected: '',
      mounted: () => {
        console.log('mounted');
      }
    };
  }

  public getvalue(){
    return this.props.selected;
  }
  onChange(val) {
    console.log("hhhhhhhh")
    this.setValue(val);
   // this.emitter.trigger('process');
  }

  setValue(val: any) {
    this.props.selected = val;
    console.log(val);
    this.putData(this.key, this.props.selected);
  }
}
