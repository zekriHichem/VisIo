package VisIo

import Livy.LivyClient
import VisIo.Data
class PCA(val datac: Data, val idc: Int, val sessionIdc: Int, val clientc: LivyClient, val reductionSizec: Int, val urlfilec: String) extends AlgoSpark {
  override val dataIn: Data = datac

  override var dataOut: String = null
  override val client: LivyClient = clientc
  override val sessionId: Int = sessionIdc
  override val id: Int = idc
  override val name: String = "PCA"
  val reductionSize: Int = reductionSizec
  override val urlfile: String = urlfilec

  override def run(): Boolean = {
    if ((this.uploadData()) && (this.runSpark(this.urlfile, Map("id"->this.id,"nb"->this.reductionSize)))) {
      this.dataOut = this.name + this.id.toString
      true
    }else {
       false
    }
  }

}
