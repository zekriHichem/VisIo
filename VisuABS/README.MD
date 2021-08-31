# VisIO Scala Abstraction

# Abstraction 

In this part we will explain our abstraction and how to add new algorithm to the back-end of our solution. this abstraction is realized by respecting the principles of object-oriented programming and design patterns. 


> this abstraction should be used in the different microservices to facilitate the addition of a new algo and their MS
## Our solution
We have two types of execution execution execution main.spark (map reduce) and simple execution .
To explain our solution we will use three different types of algorithms to understand the different cases : 

 1. PCA (principal component analysis )  : Algo running in main.spark 
 2. DFTpre (Discrete Fourier Transformation preprossing ) : Algo running in main.spark 
 3. UMAP () : Algo running in simple server 

### Schema
![diagram](Main.png)

> Methods in italics are abstract methods.

> this section is for contributors if you went only to use skip it

We have two precipale  class  : 

 1. Data : Data is a class that represents the different representations of data in input. there are two types of data (DataSpark and DataSimple) .
**attributes** :  
		- **type_data** : Enumeration TYPEDATA <--- the type of input data    
		- **name_input**: Name of data input (database.table : for data initial sql , collectionname for mongodb , name of variable for main.spark input)  
		- **mongo** : mongo connection url (mongo:://host:port/db)  
		- **connection**: Connection  <--- optionnel if we use initial sql database   
**methods:**  
		**upload_data()**: abstract method <--- get data input   
		**save(res)**: abstract method <--- save data result in intermediate database
 2. Algo : Algo is a class that allows to represent the different algorithms and execute them then retrieve the results. 
 **attributes**:   
	 **data** :Data <--- data input  
	 **res**: result data 
**methods:** 
	**run()** :abstract method run algo   
	**save()**: run save of data with attribute res  
	
There are also other classes such as : 
 3. DataSpark : redefin all Data methods + two attributes (client : main.Livy client ,session : session id)  
 4. DataSimple : redefin all Data methods
 5. Connection : connection to sql database .
**attributes**:  
**host**  : host of SQL bdd  
**user**   : user of SQL bdd  
**password** : password of SQL bdd  
**port** : port of SQL bdd  
**methods**:  
**get_connection_spark()** : get main.spark string connection for bdd  
**get_connection_simple()**: get python string connection for bdd  
 6. TYPEDATA (enumeration) : type of data . 
 FromIntialToSpark  <--- From SQL database to main.spark session   
FromIntialToSimple <--- From SQL database to simple python or scala   
FromSparkTssToSpark <--- From main.spark Tss to main.spark Tss  
FromMongoToSpark <--- From intermediate database mongo to main.spark session   
FomMongoToSimple <--- From intermediate database mongo to simple python or scala ..  
 7. UMAP, PCA, DFTpre : Example of Algos .  

### How to add new algo

To add an algorithm it is necessary to add a class that inherits from the Algo class and that redefines the `run` function. 
 1. #### For main.spark algos
 For main.spark aglo you can create code file that contiane algo code (in the same way as you write to the shell instruction by line) with parameterq beteween <> and  define the function `run` like this example   :   
                  
  
      package main.VisIo  
      
      import main.Livy.LivyClient  
      import main.VisIo.Data  
      
      class PCA(val datac: Data, val idc: Int, val sessionIdc: Int, val clientc: LivyClient) extends AlgoSpark {  
        override val dataIn: Data = datac
        override var dataOut: String = null
        override val client: LivyClient = clientc
        override val sessionId: Int = sessionIdc
        override val id: Int = idc
        override val name: String = "PCA"
      
        override def run(): Boolean = {
          if ((this.uploadData()) && (this.runSpark("./src/main/scala/main.VisIo/main.spark/PCA", Map("id"->this.id,"nb"->25)))) {
            this.dataOut = this.name + this.id.toString
            true
          }else {
             false
          }
        }
      
        }
  
 2.  #### For  simple algos
  For main.spark aglo you can define the function `run` like this example   

### References 
tutorial point Design Pattern : [https://www.tutorialspoint.com/design_pattern/abstract_factory_pattern.htm](https://www.tutorialspoint.com/design_pattern/abstract_factory_pattern.htm)

star UML : [http://staruml.io/](http://staruml.io/)

Python naming convention : [https://visualgit.readthedocs.io/en/latest/pages/naming_convention.html](https://visualgit.readthedocs.io/en/latest/pages/naming_convention.html) 

TSS unsupervised lib : [https://github.com/unsupervise/main.spark-tss](https://github.com/unsupervise/spark-tss) 