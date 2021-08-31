package Livy

class Session(namec: String, statec: String, proxyUserc: String, idc:Double, ownerc: String, kindc: String, appIdc: String) {
  val name: String = namec
  val state: String = statec
  val proxyUser: String = proxyUserc
  val id: Int = idc.asInstanceOf[Int]
  val owner: String = ownerc
  val kind: String = kindc
  val appId: String = appIdc

  def this(map:Map[Any,Any]) = {
    this(
      map.get("name").get.asInstanceOf[String],
      map.get("state").get.asInstanceOf[String],
      map.get("proxyUser").get.asInstanceOf[String],
      map.get("id").get.asInstanceOf[Double],
      map.get("owner").get.asInstanceOf[String],
      map.get("kind").get.asInstanceOf[String],
      map.get("appId").get.asInstanceOf[String])
  }

}


