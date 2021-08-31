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

export class BddComponent extends Component {
  data: any;
  user = "";
  databases: DatabasesTable[];
  constructor(databases: DatabasesTable[]) {
    super('BDD');
    this.databases = databases;
  }

  async builder(node) {
    const out1 = new Output('table', 'Output', numSocket);
    var node1 = node.addControl(new SelectControls(this.editor, 'selectDB', this.databases)).addControl(new CheckControls(this.editor,"is_mts")).addOutput(out1);
    return node1
  }

   worker(node, inputs, outputs,editor) {
     let mts = (node.data.is_mts == undefined)? false: node.data.is_mts;
     console.log(mts);
     outputs["table"] = "FromIntialTo*" + node.data.selectDB.split("*")[1] + "*" + mts.toString() + "*" + node.data.selectDB.split("*")[0];
    for (var i=0 ; i < editor.nodes.length; i++){
      if (editor.nodes[i].id == node.id) {
        if (node.data.selectDB != null) {
        editor.nodes[i].addControl(new StatusControls(editor, 'Success',true));
        editor.nodes[i].update()
        }
        else {
          editor.nodes[i].addControl(new StatusControls(editor, 'Success',false));
          editor.nodes[i].update()
        }
      }

    }

   }


}
