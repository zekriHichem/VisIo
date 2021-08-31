import {Component, Input, Output} from 'rete';
import {numSocket} from '../sockets';
import {SelectControls} from '../controls/select/selectControls';
import {NumControl} from '../controls/number/numControls';
import {BtnrunControls} from '../controls/runbtn/btnrunControls';
import {HttpClient} from '@angular/common/http';
import {StatusControls} from '../controls/run-status/statusControls';
import {of} from 'rxjs';
import {ServerStatus} from '../../../models/ServerStatus';
import {environment} from '../../../../environments/environment';

export class PcaComponent extends Component {
  data: any;
  constructor(private http: HttpClient, private server: ServerStatus) {
    super('PCA (Prencipals Components Analysis');
  }

  async builder(node) {
    const inp1 = new Input('table', 'table', numSocket);

    const out1 = new Output('result', 'Output', numSocket);
    return node.addInput(inp1).addControl(new NumControl(this.editor, 'reductionsize')).addOutput(out1);

  }


 async worker(node, inputs, outputs,editor) {
   let sessionid = sessionStorage.getItem('sessionId');
    console.log('bEGIN pca');
    if (sessionid == null) {

    } else {
      console.log('pca');
      let typedata = inputs['table'][0].split("*")[0];
      let inputName = inputs['table'][0].split("*")[1];
      let is_mts = (inputs['table'][0].split("*")[2] == "true")? 1 : 0;

      let t = await this.http.post<ResponseAlgo>( environment.url_pca+ 'runDFT', {
        typedata: typedata + 'Tss',
        input_name: inputName,
        session_id: sessionid,
        is_mts: is_mts,
        id: Date.now(),
        server: 'http://' + this.server.host + ":" + this.server.port,
        rds: node.data.reductionsize,
        datetime: inputs['table'][0].split("*")[3]
      }).toPromise();
      for (var i = 0; i < editor.nodes.length; i++) {
        if (editor.nodes[i].id == node.id) {
          if (t.status != "ERROR") {
            editor.nodes[i].addControl(new StatusControls(editor, 'Success', true));
            editor.nodes[i].update();
            outputs['result'] = "FromTssTo*" + t.output + "*" + inputs['table'][0].split("*")[2]+ "*" +inputs['table'][0].split("*")[3]
          } else {
            editor.nodes[i].addControl(new StatusControls(editor, 'Success', false));
            editor.nodes[i].update()
          }
        }
      }

    }

  }

}
