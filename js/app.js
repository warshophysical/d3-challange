
// creating canvas for graph
var width = parseInt(d3.select("#scatter").style("width"));
var height = width - width / 3.9;

var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr("class", "chart");