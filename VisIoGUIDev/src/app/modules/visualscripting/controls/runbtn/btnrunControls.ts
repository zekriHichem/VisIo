import {Control} from 'rete';
import {AngularControl} from 'rete-angular-render-plugin';
import {Type} from '@angular/core';
import {FormControl} from '@angular/forms';
import {RunbtnComponent} from './runbtn.component';

export class BtnrunControls extends Control implements AngularControl {
  component: Type<RunbtnComponent>;
  props: { [key: string]: unknown };
  // tslint:disable-next-line:ban-types
  constructor(public emitter, public key , public Algo) {
    super(key);
    console.log('const');
    this.component = RunbtnComponent;
    this.props = {
      run: () => this.run(),
      mounted: () => {
        console.log('mounted');
      }
    };
  }

  onChange(val) {
    console.log(val);
    this.setValue(val);
    this.emitter.trigger('process');
  }

  setValue(val: any) {
    this.props.selected = val;
    this.putData(this.key, this.props.selected);
  }
  run(){
    switch (this.Algo) {
      case 'SMA':
        this.runSma();
        break;
      case 'PCA':
        this.runPca();
        break;
    }
  }
  runSma() {
    console.log('SMA');
  }
  runPca() {
    console.log('PCA');
  }
}
