import {Component, Input, Output} from 'rete';
import {numSocket} from '../sockets';
import {NumControl} from '../controls/number/numControls';
import {SelectControls} from '../controls/select/selectControls';
import {RunbtnComponent} from '../controls/runbtn/runbtn.component';
import {BtnrunControls} from '../controls/runbtn/btnrunControls';
import {RunStatusNgComponent} from '../controls/run-status/run-status.component';
import {StatusControls} from '../controls/run-status/statusControls';

export class LinechartComponent extends Component {
  data: any;

  constructor() {
    super('LineChart');
  }

  async builder(node) {
    const inp1 = new Input('table', 'table', numSocket);
    var node1 = node.addControl(new NumControl(this.editor, 'begin')).addControl(new NumControl(this.editor, 'end')).addInput(inp1);
    return node1
  }

   worker(node, inputs, outputs,editor) {
     console.log('hhhhh');
     window.open('linechart/' + inputs['table'][0].split("*")[1] + '/' + node.data.begin + '/' + node.data.end + '/'+ inputs['table'][0].split("*")[3])

   }


}
