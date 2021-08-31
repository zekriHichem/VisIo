package VisIo

import Livy.LivyClient

class DataSpark (val typeDatac:String , val inputNamec:String, val datetimec: String) extends Data {
  override val typeData: String = typeDatac
  override val inputName: String = inputNamec
  override val datetime: String = datetimec

  override def uploadData(): String  =  {
    val code = this.typeData match {
      case "FromIntialToSpark" => fromIntiaTospark()
      case "FromMongoToSpark" => fromMongoToSpark()
      case "FromSparkToSpark" => fromSparkToSpark()
      case _ => null
    }
    code
  }

  override def save(): String = {
    "f"
  }

  private def fromIntiaTospark(): String = {
    println(this.inputName)
    println(this.inputName.split("/").toList)
    val tableName = this.inputName.split("/").apply(5)
    this.getIntialDb(inputName).getConnectionSpark(tableName)
  }

  private def getIntialDb(inputname: String): ConnectionSql = {
    val host = inputname.split("/").apply(0)
    val port = inputname.split("/").apply(1)
    val user = inputname.split("/").apply(2)
    val password = inputname.split("/").apply(3)
    val db = inputname.split("/").apply(4)

    new ConnectionSql(host,user, password, port.toInt,db)
  }

  private def fromMongoToSpark(): String = {
    LivyClient.getStringFile("./src/main/scala/VisIo/spark/getMongo",Map("nameCollection" -> this.inputName))
  }

  private def fromSparkToSpark(): String = {
    "var dfInput = " + this.inputName
  }
}
