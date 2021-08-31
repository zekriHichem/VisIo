# main.Livy REST client 
This api is equivalent to python [pylivy api](https://pylivy.readthedocs.io/)  which plays the role of an HTTP client for main.Livy REST. In another way it is a wrapper for most of the main.Livy REST functions api [HERE](http://livy.incubator.apache.org./docs/latest/rest-api.html) in scala.

## Main Classes 

### LivyClient
##### Attributes:

 - url : url to livy server example : http://host:port/

##### méthode:

 - **createSession(king: String):**
 Creates a new interactive Scala, Python, or R shell in the cluster. 
 kind => Spark, pySpark, rSpark
 this function takes more value in parameters such as config , owner ... but we have developed that the necessary for our case it remains in the TODO LIST. 
 Return Session Object or Null if error 
 - **getSession(id: Int):**
	Return Session Object with id  or Null if error 
 - **deleteSession(id: Int):**
 Delete Session with id return Boolean
 - **getSessionState(id: Int):**
 Return String session state : NOT_STARTED, STARTING, IDLE , BUSY , SHUTTING_DOWN , ERROR ,DEAD, SUCCESS 
 - **getStatement (sessionId: Int, satementId: Int ):** 
 Return Statement Object with id  or Null if error
 - **createStatement(urlFile: String, parameters: Map[String, Any], SessionId: Int ):** 
 It takes by setting a url to the code file that contains the code and a map to initialize the parameters in the code (you have to put the code parameters between <>) for example => 
Code.scala:

    Val number1 = <num1>
    Val str1 = "<str>"
    println(number1.toString + str1 )
  to run this code : 
  

    client.createStatement(urltocode, Map("num1"-> 250, "str"->" Word"),sessionid)
   Return Statement Object with id  or Null if error


 - **createStatement(code: String, sessionId: Int):**
 Create statement with code String (For one or more instruction separated with ; )
    Return Statement Object with id  or Null if error
 - **static getStringFile(urlFile)**: Static method used in  **createStatement(urlFile: String, parameters: Map[String, Any], SessionId: Int )** method to get file code to string

### Session
##### Attributes:

 - name: String 
 - state: String   
 - proxyUser: String 
 - id: Int  owner: String    
 - kind: String  
 - appId: String

##### méthode:
Constructor From Map 
### Statement:
##### Attributes:
 - id: Int
 - code: String
 - state: String
 - progress: Double
 - started: Double
 - completed: Double
 - output: OutPut

##### méthode:
Constructor From Map 

## TODO List: 

 - [ ] Add more parameter to createSession method
 - [ ] Add more function like getAllSession , getAllStatement,... see [HERE](http://livy.incubator.apache.org./docs/latest/rest-api.html)
 