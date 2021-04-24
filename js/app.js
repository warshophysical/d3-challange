
// creating canvas for graph
var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 3.9;

var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");



 // Margin for graph
 var margin = 20;

 // space for placing words
 var labelArea = 110;

 // padding for the text
 var tPadBot = 40;
 var tPadLeft = 40;

 // Creating bottom axis

 svg.append("g").attr("class", "xText");
 var xText = d3.select(".xText");

 function xTextRefresh() {
   xText.attr(
     "transform",
     "translate(" +
       ((width - labelArea) / 2 + labelArea) +
       ", " +
       (height - margin - tPadBot) +
       ")"
   );
 }
 xTextRefresh();
//Poverty
 xText
   .append("text")
   .attr("y", -26)
   .attr("data-name", "poverty")
   .attr("data-axis", "x")
   .attr("class", "aText active x")
   .text("In Poverty (%)");


//Age
xText
.append("text")
.attr("y", 0)
.attr("data-name", "age")
.attr("data-axis", "x")
.attr("class", "aText inactive x")
.text("Age (Median)");

//Income
xText
.append("text")
.attr("y", 26)
.attr("data-name", "income")
.attr("data-axis", "x")
.attr("class", "aText inactive x")
.text("Household Income (Median)");



 // Creating Left Axis

 var leftTextX = margin + tPadLeft;
 var leftTextY = (height + labelArea) / 2 - labelArea;


   svg.append("g").attr("class", "yText");
   var yText = d3.select(".yText");

   function yTextRefresh() {
     yText.attr(
       "transform",
       "translate(" + leftTextX + ", " + leftTextY + ")rotate(-90)"
     );
   }

   yTextRefresh();


//Obesity
  yText
  .append("text")
  .attr("y", -26)
  .attr("data-name", "obesity")
  .attr("data-axis", "y")
  .attr("class", "aText active y")
  .text("Obese (%)"); 

// Smokes
 yText
 .append("text")
 .attr("x", 0)
 .attr("data-name", "smokes")
 .attr("data-axis", "y")
 .attr("class", "aText inactive y")
 .text("Smokes (%)");

// Lacks Healthcare
yText
.append("text")
.attr("y", 26)
.attr("data-name", "healthcare")
.attr("data-axis", "y")
.attr("class", "aText inactive y")
.text("Lacks Healthcare (%)"); 

//  sending data to browser
//  d3.csv("assets/data/data.csv").then(function(data) {
//  console.log(data);
//  });

// Visualize the data
d3.csv("assets/data/data.csv").then(function(data) {
visualize(data);
});

 // Adding x-axis line
 function visualize(theData) {

  var xMin;
  var xMax;

  var xScale = d3
    .scaleLinear()
    .domain([xMin, xMax])
    .range([margin + labelArea, width - margin]);

  var xAxis = d3.axisBottom(xScale);

  svg
    .append("g")
    .call(xAxis)
    .attr("class", "xAxis")
    .attr("transform", "translate(0," + (height - margin - labelArea) + ")");

}
