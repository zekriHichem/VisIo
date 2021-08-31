package Livy

class OutPutError (override val statusc: String , override val executionCountc: Double , val eNmaec: String, val eValuec: String)  extends OutPut (statusc, executionCountc) {
  val eName: String = eNmaec
  val eValue: String = eValuec
  def this(map: Map[Any,Any]) = {
    this(
      map.get("status").get.asInstanceOf[String],
      map.get("execution_count").get.asInstanceOf[Double],
      map.get("ename").get.asInstanceOf[String],
      map.get("evalue").get.asInstanceOf[String]
    )
  }
}
