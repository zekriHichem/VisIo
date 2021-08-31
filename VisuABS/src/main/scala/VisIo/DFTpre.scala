package VisIo

import Livy.LivyClient
import VisIo.Data
class DFTpre(val datac:Data, val idc: Int, val sessionIdc: Int, val clientc: LivyClient,val urlfilec: String) extends AlgoSpark {
  override val dataIn: Data =  datac
  override var dataOut: String = null
  override val client: LivyClient = clientc
  override val sessionId: Int = sessionIdc
  override val id: Int = idc
  override val name: String = "DFTpre"
  override val urlfile: String = urlfilec




  override def run(): Boolean = {
    if ((this.uploadData()) && (this.runSpark("./spark/DFT", Map("id"->id)))) {
      this.dataOut = this.name + this.id.toString
      true
    }else {
      false
    }
  }

}
