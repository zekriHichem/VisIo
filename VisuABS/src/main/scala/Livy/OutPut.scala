package Livy

abstract class OutPut (val statusc: String, val executionCountc: Double) {
  val status: String = statusc
  val executionCount : Double = executionCountc
}
