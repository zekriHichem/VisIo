package VisIo

class ConnectionSql(val hostc:String, val userc:String, val passwordc:String, val portc:Int, val databasec: String) {
  val host: String = hostc
  val user: String = userc
  val password: String = passwordc
  val database: String = databasec
  val port: Int = portc

  def getConnectionSpark(nameInput:String): String = {
    val s = "jdbc:mysql://" + this.host + ":" + this.port.toString + "/" + database
    "import org.apache.spark.sql.SQLContext; val sqlcontext = new org.apache.spark.sql.SQLContext(sc); val dfInput = sqlcontext.read.format(\\\"jdbc\\\").option(\\\"url\\\", \\\"" + s + "\\\").option(\\\"driver\\\", \\\"com.mysql.jdbc.Driver\\\").option(\\\"dbtable\\\", \\\"" + nameInput + "\\\" ).option(\\\"user\\\", \\\"" + this.user + "\\\").option(\\\"password\\\", \\\"" + this.password + "\\\").load()"
  }
  def getConnectionSimple(nameInput:String): String = {
    return "str"
  }
}
