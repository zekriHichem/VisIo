import {Component, Input, Output} from 'rete';
import {numSocket} from '../sockets';
import {NumControl} from '../controls/number/numControls';
import {SelectControls} from '../controls/select/selectControls';
import {RunbtnComponent} from '../controls/runbtn/runbtn.component';
import {BtnrunControls} from '../controls/runbtn/btnrunControls';
import {RunStatusNgComponent} from '../controls/run-status/run-status.component';
import {StatusControls} from '../controls/run-status/statusControls';

export class ScatterplotComponent extends Component {
  data: any;

  constructor() {
    super('ScatterChart');
  }

  async builder(node) {
    console.log('heloo');
    const inp1 = new Input('table', 'table', numSocket);
    var node1 = node.addInput(inp1);
    return node1
  }

   worker(node, inputs, outputs,editor) {
     console.log(inputs['table'][0].split("*")[1]);

     window.open('scatterplot/' + inputs['table'][0].split("*")[1]);

   }


}
