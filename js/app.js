
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
