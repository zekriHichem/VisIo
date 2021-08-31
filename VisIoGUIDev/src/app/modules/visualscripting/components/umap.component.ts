import {Component, Input, Output} from 'rete';
import {numSocket} from '../sockets';
import {SelectControls} from '../controls/select/selectControls';
import {NumControl} from '../controls/number/numControls';
import {BtnrunControls} from '../controls/runbtn/btnrunControls';
import {HttpClient} from '@angular/common/http';
import {StatusControls} from '../controls/run-status/statusControls';
import {environment} from '../../../../environments/environment';

export class UmapComponent extends Component {
  data: any;
  constructor(private http: HttpClient) {
      super('UMAP');
  }

  async builder(node) {
    const inp1 = new Input('table', 'table', numSocket);

    const out1 = new Output('result', 'Output', numSocket);
    return node.addInput(inp1).addOutput(out1);


  }

 async worker(node, inputs, outputs,editor) {
    let typedata = inputs['table'][0].split("*")[0];
    let inputName = inputs['table'][0].split("*")[1];
    let is_mts = (inputs['table'][0].split("*")[2] == "true")? 1 : 0;
   console.log('is umap');
   console.log(inputs['table'][0]);
   const formData = new FormData();
    formData.append('typedata' , typedata + "Simple");
    formData.append('inputName' , inputName);
    formData.append('isMTS' , is_mts.toString());
    formData.append('id' , Date.now().toString());
    formData.append("datetime", inputs['table'][0].split("*")[3])

    let t = await this.http.post<ResponseAlgo>( environment.url_umap+'run', formData).toPromise();
   console.log(t.output);
   for (var i = 0; i < editor.nodes.length; i++) {
      if (editor.nodes[i].id == node.id) {
        if (t.status != "ERROR") {
          editor.nodes[i].addControl(new StatusControls(editor, 'Success', true));
          editor.nodes[i].update();
          outputs['result'] = "FromSimpleTo*" + t.output + "*" + inputs['table'][0].split("*")[2]+ "*" +inputs['table'][0].split("*")[3];
        } else {
          editor.nodes[i].addControl(new StatusControls(editor, 'Success', false));
          editor.nodes[i].update()
        }
      }
    }
  }

  change() {
    console.log('hhhhh');
  }
}
