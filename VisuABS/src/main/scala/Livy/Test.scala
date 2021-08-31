package Livy

object Test {
  def main(args: Array[String]): Unit = {

    println(LivyClient.getStringFile("./src/scala/Livy/scala", Map()))
  /*  println("create LivyClient ----------------------------------------")
    var client = new LivyClient("http://sandbox.c4e.kyomei.fr:8998")
    println("create session ----------------------------------------")

    var session = client.createSession("main.spark")
    println("session created")
    println(session.id)
    println("get session ----------------------------------------")

    session = client.getSession(session.id)
    println("check session ----------------------------------------")
    Thread.sleep(10000)
    println("end sleep ----------------------------------------")
    var state = ""
    while(!state.equals("idle")) {
      state = client.getSessionState(session.id)
      Thread.sleep(2000)
    }
    println("create statement ----------------------------------------")

    var statement = client.createStatment("./src/main/scala/code.txt",Map(),session.id)
    Thread.sleep(10000)
    println("get statement---------------------------------------")

    statement = client.getStatement(session.id, statement.id)
    // check output status
    println(statement.output.status)
    println("delete session ----------------------------------------")
    println(client.deleteSession(session.id))*/



  }

}
