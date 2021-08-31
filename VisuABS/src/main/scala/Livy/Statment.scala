package Livy

class Statment(val idc: Int, val codec: String, val statec: String, val progressc: Double, val startedc: Double, val completedc: Double ) {

  val id: Int = idc
  val code: String = codec
  val state: String = statec
  val progress: Double = progressc
  val started: Double = startedc
  val completed: Double = completedc
  var output: OutPut = null


  def this(map: Map[Any, Any]) = {
    this(
      map.get("id").get.asInstanceOf[Double].toInt,
      map.get("code").get.asInstanceOf[String],
      map.get("state").get.asInstanceOf[String],
      map.get("progress").get.asInstanceOf[Double],
      map.get("started").get.asInstanceOf[Double],
      map.get("completed").get.asInstanceOf[Double]
    )
    this.output = this.getOutPut(map.get("output").get.asInstanceOf[Map[Any, Any]])
  }

  def getOutPut(map: Map[Any, Any]): OutPut = {
    if (map == null) return null
    val status = map.get("status").get
    if (status.equals("error")) return new OutPutError(map)
    return new OutPutSeccuss(map)
  }



}
