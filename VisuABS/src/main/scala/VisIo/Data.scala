package VisIo

trait Data {
  val typeData: String
  val inputName: String
  val datetime: String
  def uploadData() : String
  def save(): String
}
