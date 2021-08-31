package Livy

class OutPutSeccuss (override val status: String , override val executionCount: Double , val datac: String)  extends OutPut (status, executionCount) {
  val data: String = datac
  def this(map: Map[Any,Any]) = {
    this(
      map.get("status").get.asInstanceOf[String],
      map.get("execution_count").get.asInstanceOf[Double],
      map.get("data").get.asInstanceOf[Map[Any, Any]].get("text/plain").get.asInstanceOf[String]
    )
  }
}
