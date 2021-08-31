package VisIo

trait Algo {
  val dataIn: Data
  val id: Int
  val name: String

  def run(): Boolean
  def save(): Boolean
}
