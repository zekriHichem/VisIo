package VisIo

class DataSimple(val typeDatac:String , val inputNamec:String, val mongoc:String, val connectionc:ConnectionSql, val datetimec: String) extends Data {
  override val typeData: String = typeDatac
  override val inputName: String = inputNamec
  override val datetime: String = datetimec
  val mongo: String = mongoc

  override def uploadData(): String  =  {

  return "str"
  }

  override def save(): String = {

    return  "str"
  }
}
