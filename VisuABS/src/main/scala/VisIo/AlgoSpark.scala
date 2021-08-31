package VisIo

import Livy.LivyClient
import VisIo.Algo

abstract  class AlgoSpark extends Algo {
  var dataOut: String
  val client: LivyClient
  val sessionId: Int
  val urlfile: String

  def uploadData(): Boolean = {
    println("begin upload")
    var stm = this.client.createStatment(this.dataIn.uploadData(), this.sessionId)
    println(stm.id)
    while (stm.state != "available" ){
      print("....")
      stm = this.client.getStatement(this.sessionId,stm.id)
      Thread.sleep(5000)
    }
    println(stm.output.status)

    stm.output.status == "ok"
  }

  def runSpark(fileUrl: String, params: Map[String, Any]): Boolean = {
   var stm = this.client.createStatment(fileUrl, params, this.sessionId)
    println(stm.state)
    println("runing is begin")
    while (stm.state != "available" ){
      print("....")
      stm = this.client.getStatement(this.sessionId,stm.id)
      Thread.sleep(5000)
    }
    println(stm.output.status)

    stm.output.status == "ok"

  }
  override def save(): Boolean = {
    println("heloooooooooo")
    val str = "import org.apache.spark.sql.functions._; import com.mongodb.spark.config._; import com.mongodb.spark._;val df = " +this.dataOut + "; val cols = df.columns.map(name => collect_list(name).as(name)); val dfAgg = df.agg(cols.head, cols.tail: _*); val varValues = array(dfAgg.columns.map(name => struct(lit(name).as(\\\"cols\\\"), col(name).as(\\\"series\\\"))): _*); val dfFinal = dfAgg.select(varValues.as(\\\"var_values\\\")).select(explode(col(\\\"var_values\\\")).as(\\\"var_values\\\")).select(\\\"var_values.*\\\"); val writeConfig = WriteConfig(Map( \\\"collection\\\" -> \\\""+this.dataOut+"\\\", \\\"writeConcern.w\\\" -> \\\"majority\\\"), Some(WriteConfig(sc))); MongoSpark.save(dfFinal, writeConfig);"
    println(str)
    var stm =this.client.createStatment(str, this.sessionId)
    while (stm.state != "available" ){
      print("....")
      stm = this.client.getStatement(this.sessionId,stm.id)
      Thread.sleep(5000)
    }

    stm.output.status == "ok"
  }

}
