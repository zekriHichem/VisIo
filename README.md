# VisIO solution : 

## abstract:
In many real-world applications, data is captured over time, forming a time series, and with its increase, processing has become a trend. For an analyst, the visualization of the series is a preliminary task for any processing of these data, it allows us to understand it, understand our results, and sometimes even detect visual patterns.

There are several tools for time series visualization but generally, these tools either do not process massive data or they are not directly usable for time series. 

For our internship, we set up a time series visualization and analysis tool. The latter allows, in a first step, to load data from different SQL sources by simply inserting their type and location. It also provides a space to generate pipelines of data analysis algorithms for time series, taking into account simple algorithms that run on the same server or centralized and distributed ones, in particular, the algorithms that run on the SPARK engine. 

Finally, it allows visualizing the results at any stage in the form of 2D graphics (line graph, scatter plot ...). All these works are developed using a micro-services web architecture that is both extensible and easy to deploy.


**Keys words** : Time series, visulization, microservices, data analysis, ditrbuted algorithms

## Why VisIo: 
By seeing the differents solutions that exist for the visualization of the Time series (TS) and analyzed their advantages and disadvantages. We notice that the majority of these solutions do not deal with the Big Data side and that others do not deal with the management of pipelines.

Our solution VisIo is a web software that allows the importion, processing and visualization of TS for both multivariate and univariate types while allowing the description of the pipeline leading to this visualization
by the interactive assembly of visual blocks (in the movement of "visual scripting" and "low code" tools). This solution allows the import of data from any SQL database any SQL database (Hive, MYSQL, postgres, parquet files ...). It also proposes to chain SPARK algorithms (which are developed in MapReduce) and/or Simple algorithms. This allows us to process massive data and to visualize the results in graphs such as: Line graph, point graph, bar graph bar graphs etc. All this using a modern, flexible and extensible web architecture.

 **note** : you can read more details about project in repport [here](https://github.com/zekriHichem/VisIo/blob/main/RapportPFE .pdf).