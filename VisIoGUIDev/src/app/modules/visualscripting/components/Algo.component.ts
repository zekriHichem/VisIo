import {Component, Output} from 'rete';
import {numSocket} from '../sockets';
import {NumControl} from '../controls/number/numControls';
import {SelectControls} from '../controls/select/selectControls';
import {RunbtnComponent} from '../controls/runbtn/runbtn.component';
import {BtnrunControls} from '../controls/runbtn/btnrunControls';
import {RunStatusNgComponent} from '../controls/run-status/run-status.component';
import {StatusControls} from '../controls/run-status/statusControls';
import {HttpClient} from '@angular/common/http';
import {CheckControls} from '../controls/check/checkControls';

export class AlgoComponent extends Component {
  data: any;

  constructor(databases: DatabasesTable[]) {
    super('name Algo');
  }

  async builder(node) {
    const out1 = new Output('table', 'Output', numSocket);
    var node1 = node.addControl().addControl().addOutput(out1);
    return node1
  }

   worker(node, inputs, outputs,editor) {

    }

   }



