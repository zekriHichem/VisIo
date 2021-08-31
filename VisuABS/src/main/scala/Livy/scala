import org.apache.main.spark.sql.types.MapType._
import org.apache.main.spark.sql.DataFrame

var ndf = dftfinal.series.withColumn("cols", map_values(col("decorators")).getItem(0)).drop("decorators")
def TransposeDF(df: DataFrame, columns: Seq[String], pivotCol: String): DataFrame = {
    val columnsValue = columns.map(x => "'" + x + "', " + x)
    val stackCols = columnsValue.mkString(",")
    val df_1 = df.selectExpr(pivotCol, "stack(" + columns.size + "," + stackCols + ")").select(pivotCol, "col0", "col1")
    val final_df = df_1.groupBy(col("col0")).pivot(pivotCol).agg(collect_list("col1")).withColumnRenamed("col0", pivotCol)
    final_df
  }
val productTypeDF = TransposeDF(ndf, Seq("dftfinal"), "cols")
val df = productTypeDF.drop("cols")
val df1 = df.select(df.columns.map(c => element_at(col(c),1).alias(c)): _*)
val dff = df1.select(explode(arrays_zip(df1.columns.map(c => col(c).alias(c)):_*))).select(df1.columns.map(c => col("col."+c).alias(c)):_*)
