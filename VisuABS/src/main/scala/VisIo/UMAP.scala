package VisIo

import VisIo.Data

class UMAP(val datac: Data, val idc: Int, val namec: String ) extends AlgoSimple {
  override val dataIn: Data = datac
  override val id: Int = idc
  override val name: String = namec


  override def run(): Boolean = {
    return true
  }

}
