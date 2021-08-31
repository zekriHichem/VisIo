package VisIo

import Livy._
object test {



  def main(args: Array[String]): Unit = {
   var client =  new LivyClient("http://192.168.1.9:8998")
    // create session
    //client.createSession("spark")
    // wiat to session to be idle

    // create data input from intial to main.spark
   // var data = new DataSpark("FromIntialToSpark","idfffff/timeseries","dd")
    print(LivyClient.getStringFile("./src/main/scala/VisIo/spark/saveMongo",Map("outDf" -> "outdf")))

    val str = "import org.apache.spark.sql.functions._; import com.mongodb.spark.config._; import com.mongodb.spark._;val df = " +this + "; val cols = df.columns.map(name => collect_list(name).as(name)); val dfAgg = df.agg(cols.head, cols.tail: _*); val varValues = array(dfAgg.columns.map(name => struct(lit(name).as(\\\"cols\\\"), col(name).as(\\\"series\\\"))): _*); val dfFinal = dfAgg.select(varValues.as(\\\"var_values\\\")).select(explode(col(\\\"var_values\\\")).as(\\\"var_values\\\")).select(\\\"var_values.*\\\"); val writeConfig = WriteConfig(Map(\\\"collection\\\" -> \\\"collecrt\\\", \\\"writeConcern.w\\\" -> \\\"majority\\\"), Some(WriteConfig(sc))); MongoSpark.save(dfFinal, writeConfig);"

    // create algos
   // var algo = new DFTpre(data, 1, 0, client)
    // run algo
   // println(algo.run())
    //println(algo.save())
    //save in mongo
    //println(algo.save())



  }



}
