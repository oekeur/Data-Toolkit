window.onload = function() {
 	D3Line();
}
	var data;

function D3Line () {
// canvas size
	var margin = {top: 20, right: 20, bottom: 60, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y%m%d").parse,
	bisectDate = d3.bisector(function(d) { return d[0]; }).left;

// scaling
var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

// line position
var pos = d3.svg.line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); });

// canvas
var svg = d3.select(document.getElementById('container')).append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// import data and draw path and axis
d3.json("data.json", function(error, data) {
	if (error) throw error;

  data.forEach(function(d) {
    d[0] = parseDate(d[0]);
    d[1] = d[1] / 10
  });

  x.domain(d3.extent(data, function(d) { return d[0]; }));
  y.domain(d3.extent(data, function(d) { return d[1]; }));

svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis)
.selectAll("text")
  .attr("y", 0)
  .attr("x", 7)
  .attr("dy", ".35em")
  .attr("transform", "rotate(90)")
  .style("text-anchor", "start")


svg.append("g")
  .attr("class", "y axis")
  .call(yAxis)
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", -25)
  .style("text-anchor", "end")
  .text("Temperature")
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 0)
  .style("text-anchor", "end")
  .text("Temperature")

svg.append("path")
   .datum(data)
   .attr("class", "line")
   .attr("d", pos);
var focus = svg.append("g")
   .attr("class", "focus")
   .style("display", "none");


focus.append("line")
   .attr("class", "x")
   .style("stroke", "black")
   .attr("y1", 0)
   .attr("y2", height);

focus.append("line")
   .attr("class", "y")
   .style("stroke", "black")
   .attr("x1", 0)
   .attr("x2", width);

focus.append("text")
    .attr("class", "xt")
    .attr("dx", 8)
    .attr("dy", "-.3em");

focus.append("text")
    .attr("class", "yt")
    .attr("dx", 8)
    .attr("dy", "1em");


svg.append("rect")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .on("mouseover", function() { focus.style("display", null); })
    .on("mouseout", function() { focus.style("display", "none"); })
    .on("mousemove", mousemove);


function mousemove() {
var x0 = x.invert(d3.mouse(this)[0]),
    i = bisectDate(data, x0, 1),
    d0 = data[i - 1],
    d1 = data[i],
    d = x0 - d0[0] > d1[0] - x0 ? d1 : d0;

	focus.select(".x")
	    .attr("transform","translate(" + x(d[0]) + ", 0)")
	               .attr("y2", height);

	focus.select(".y")
	    .attr("transform","translate(0," +
	                         y(d[1]) + ")")
	               .attr("x2", width);

	setTimeout(function () {            
	focus.select("text.xt")
	    .attr("transform","translate( 0 ," + y(d[1]) + ")")
	    .text(d[1] + " C°");

	focus.select("text.yt")
	    .attr("transform","translate(" + x(d[0]) + ","+ (height - 20) +")")
	    .text(d3.time.format("%d-%m-%Y")(d[0]));
	}, 1000);
}
})}

