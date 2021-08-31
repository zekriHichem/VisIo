package Livy

import scalaj.http.{Http, HttpOptions, HttpRequest}

import scala.io.Source
import scala.util.parsing.json.JSON

/**
 * created by : Sidi Mohamed Hicham Zekri
 * LivyClient class is a wrapper around defirent function of livy REST api
 * It is scala main.Livy Rest Client
 * this class is based on scalaj-http library : https://github.com/scalaj/scalaj-http
 * @param urlc : url to livy server
 */
//TODO:: Add more functions

class LivyClient(val urlc:String) {
  val url:String = urlc

  /*
  * create session with kind
  *  @param kind : kinf of session. In main.Livy we have tree kinds (main.spark, pyspark, rspark)
  * @return Session : object session or null (that's mean : server is not running)
   */
  def createSession(kind:String): Session = {
    val data = """{"kind": """" + kind + """"}"""
    val request: HttpRequest = Http(this.url + "/sessions/").postData(data)
      .header("Content-Type", "application/json")
      .header("Charset", "UTF-8")

    val responseOne = request.asString

    // check if server is running
    if (responseOne.code != 201 &&  responseOne.code != 200) return null
    val parsed = JSON.parseFull(responseOne.body)
    val myMap: Map[Any, Any] = parsed.get.asInstanceOf[Map[Any, Any]]
    var s = new Session(myMap)
    s
  }
  def testin(): Boolean = {
    true
  }

  /*
* get specific session with id
* @param id : id of session.
* @return Session : object session or null (that's mean : server is not running)
 */
  def getSession(id:Int):Session = {
    val request: HttpRequest = Http(this.url + "/sessions/" + id.toString)
    val responseOne = request.asString
    // check if server is running
    if (responseOne.code != 201 &&  responseOne.code != 200) return null
    println(responseOne)
    val parsed = JSON.parseFull(responseOne.body)
    val myMap:Map[Any, Any] = parsed.get.asInstanceOf[Map[Any, Any]]
    new Session(myMap)
  }

  def getSessionState(sessionId: Int): String = {
    val request: HttpRequest = Http(this.url + "/sessions/" + sessionId.toString + "/state")
    val responseOne = request.asString
    val parsed = JSON.parseFull(responseOne.body)
    val myMap:Map[Any, Any] = parsed.get.asInstanceOf[Map[Any, Any]]
    myMap.get("state").get.asInstanceOf[String]

  }

  /*
* create statement (code) with file code
* @param fileCodeUrl : this url to the file of code that we went to execute it in main.spark session
* @param sessionId : session id
* @return Statement : object statement or null (that's mean : server is not running)
 */


  def createStatment(fileCodeUrl: String, params: Map[String, Any] , sessionId: Int):Statment = {

    var code = LivyClient.getStringFile(fileCodeUrl, params)
    val regex = "<[a-zA-Z0-9]*>".r
    if (regex.findAllIn(code).mkString(",") != "") {
      println(regex.findAllIn(code).mkString(","))
      return null
    }
    val data = """{"code" : " """ + code + """ "}""".stripMargin
    val request: HttpRequest = Http(url + "/sessions/"+ sessionId.toString +"/statements").postData(data)
      .header("Content-Type", "application/json")
      .header("Charset", "UTF-8")
    val responseOne = request.asString
    if (responseOne.code != 201 &&  responseOne.code != 200) return null
    val parsed = JSON.parseFull(responseOne.body)

    val myMap:Map[Any, Any] = parsed.get.asInstanceOf[Map[Any, Any]]
    new Statment(myMap)
  }

  def createStatment(code: String, sessionId: Int):Statment = {
    val data = """{"code" : " """ + code + """ "}""".stripMargin
    println(data)
    val request: HttpRequest = Http(url + "/sessions/"+ sessionId.toString +"/statements").postData(data)
      .header("Content-Type", "application/json")
      .header("Charset", "UTF-8")
    val responseOne = request.asString
    println(responseOne.code)
    if (responseOne.code != 201 &&  responseOne.code != 200) return null
    val parsed = JSON.parseFull(responseOne.body)

    val myMap:Map[Any, Any] = parsed.get.asInstanceOf[Map[Any, Any]]
    new Statment(myMap)
  }

  /*
* get specific statement with id
* @param sessionId : session id
* @param statementId : statement i
* @return Statement : object statement or null (that's mean : server is not running)
*/
  def getStatement(sessionId: Int, statementId: Int):Statment = {
    val request: HttpRequest = Http(url + "/sessions/"+ sessionId.toString +"/statements/" + statementId.toString)
    val responseOne = request.asString
    if (responseOne.code != 201 &&  responseOne.code != 200) return null
    val parsed = JSON.parseFull(responseOne.body)
    val myMap:Map[Any,Any]  = parsed.get.asInstanceOf[Map[Any, Any]]
    new Statment(myMap)
  }

  /*
* delete specific session with id
* @param sessionId : session id
* @return True or False
*/
  def deleteSession(sessionId: Int):Boolean = {
    val request: HttpRequest = Http(this.url + "/sessions/" + sessionId.toString)
      .method("DELETE")
      .header("Content-Type", "application/json")
      .header("Charset", "UTF-8")
    val responseOne = request.asString
    if (responseOne.code != 201 &&  responseOne.code != 200) return false
    true
  }


}

object LivyClient {
  def getStringFile(fileCodeUrl: String, params: Map[String, Any]): String = {
    var code = ""
    for (line <- Source.fromFile(fileCodeUrl).getLines) {
       code += line + "; "
       }
    code = code.replace("\"","\\\"")


    for ((k,v) <- params) code = code.replaceAll("<"+k+">",v.toString)
    code
  }


}