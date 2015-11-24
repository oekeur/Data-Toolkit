// initialize the object to hold the weatherdata
var weatherdata = {
	date : [],
	temp : []
}
var Month = ["January", "February", "March", "April", "May", "June", "July", 
	"August", "September", "October", "November", "December"]
// extract the dates and temperatures from textarea, 
// 	at the sime time divide by 10 to make the temperatures more readable
// 	and parse the dates into jsformat
json = JSON.parse(document.getElementById('raw').innerHTML);
for (var i = 0; i < json.length; i++) {
	weatherdata.date.push(parse(json[i][0]))
	weatherdata.temp.push(Number(json[i][1])/10)
};

// initialize the variables to determines domain[0]&[1] on the x-axis
var tempmin = 100;
var tempmax = 0;
// find the min and max values of the arrays in weatherdata (for use in transform)
for (var i=weatherdata.temp.length-1; i>=0; i--) {
    if (weatherdata.temp[i] < tempmin) {tempmin = weatherdata.temp[i]};
    if (weatherdata.temp[i] > tempmax) {tempmax = weatherdata.temp[i]};
}


var transformY = createTransform([tempmin, tempmax], [0, 240])
var transformX = createTransform([weatherdata.date[0].valueOf(), weatherdata.date[365].valueOf()], [0, 550])

// paint the canvas
	// initialize some stuff
var canvas = document.getElementById('linegraph');
canvas.width = 600;
canvas.height = 300;
var ctx = canvas.getContext('2d');
	// make axis
ctx.strokeStyle = 'black';
ctx.moveTo(50, 0);
ctx.lineTo(50, 250);
ctx.moveTo(50, 250);
ctx.lineTo(600, 250);
ctx.stroke();
	// make axislabels
ctx.fillText(tempmin + "\xB0C" , 15, 260 - transformY(tempmin));
ctx.moveTo(50, 250);
ctx.lineTo(30, 250);
ctx.fillText(tempmax + "\xB0C", 15, 248 - transformY(tempmax));
ctx.moveTo(50, 250 - transformY(tempmax));
ctx.lineTo(30, 250 - transformY(tempmax));
ctx.stroke();
	// divide the Yaxis
var i = 0
while (i <= 30) {
	ctx.fillText(i + "\xB0C" , 20, 248 - transformY(i));
	ctx.moveTo(50, 250 - transformY(i));
	ctx.lineTo(30, 250 - transformY(i));
	ctx.stroke();
	i = i + 5;
};
	// Divide the Xaxis
i = 0
while (i < 12) {
	ctx.fillText(Month[(i+10)%12] , 30 + 550 / 12 * i, 280 + (8 * ((i+1) % 2)));
	ctx.moveTo(50 + 550 / 12 * i, 250);
	ctx.lineTo(50 + 550 / 12 * i, 270 + (8 * ((i+1) % 2)));
	ctx.stroke();
	i++;
};
	// make legenda
ctx.rotate(270 * Math.PI / 180);
var text = ctx.measureText("Temperature");
ctx.fillText("Temperature", -70, 10);
ctx.setTransform(1, 0, 0, 1, 0, 0);
var text = ctx.measureText("Date");
ctx.fillText("Date", $("#linegraph").width() - text.width - 5, $("#linegraph").height() - 5);

	// make the actual line
ctx.strokeStyle = 'black';
for (var i = 0; i < 366 - 1; i++) {
	ctx.moveTo(50 + transformX(weatherdata.date[i]), 250 - transformY(weatherdata.temp[i]));
	ctx.lineTo(50 + transformX(weatherdata.date[i+1]), 250 - transformY(weatherdata.temp[i+1]));
}
	ctx.stroke();
// last points needs to be added outside of the loop because of i+1 evaluating to NaN at the end
// ctx.moveTo(transformX(weatherdata.date[]), transformY(weatherdata.temp[i]));
// 	ctx.lineTo(transformX(weatherdata.date[i+1]), transformY(weatherdata.temp[i+1]));
// 	ctx.stroke();

// used for transforming the data from some domain of data to a range of the canvas
function createTransform(domain, range){
	// domain is a two-element array of the domain's bounds    =data
	// range is a two-element array of the range's bounds      =screen
	var alpha = (range[1] - range[0])/(domain[1] - domain[0]); // factor
	var beta = range[0] - (alpha * domain[0]); 

	return function(x){
		return (alpha * x  + beta);
	};
}
// function to rewrite YYYYMMDD to js is from:
// https://stackoverflow.com/questions/10638529/how-to-parse-a-date-in-format-yyyymmdd-in-javascript
function parse(str) {
    var y = Number(str.substr(0,4));
    var m = Number(str.substr(4,2) - 1);
    var d = Number(str.substr(6,2))
    var D = new Date(y,m,d);
    return (D);}

function DrawCrosshair(e) {
	document.getElementById("templabel").innerHTML = ""
	document.getElementById("templabel").innerHTML = ""
	crh.clearRect(0,0, 600, 300)
	var crosscanvas = document.getElementById('crosshair');
	crosscanvas = crosscanvas.getBoundingClientRect();
    var x = e.clientX - crosscanvas.left;
    var y = e.clientY - crosscanvas.top;
    if (x > 50) {
    	if (y < 250){
    		ctx.moveTo(50, y);
			ctx.lineTo(x, y);
			ctx.moveTo(x, 250);
			ctx.lineTo(x, y);
			ctx.stroke();
			console.log('einde functie')
			setTimeout(ShowLabels() , 5000);
    	}
    };
    
}
// crosshairs and labels below here

var crosshair = document.getElementById('crosshair');
crosshair.width = 600;
crosshair.height = 300;
var crh = crosshair.getContext('2d');

function ShowLabels(){
	// define templabel
	// define datelabel
	// position the labels correct
	var templabel = document.getElementById('templabel');
	templabel.style.position = "absolute";
	templabel.style.left = x / 2 ;
	templabel.style.bottom =  y;
	var datelabel = document.getElementById('datelabel');
	datelabel.style.position = "absolute";
	datelabel.style.left = x;
	datelabel.style.top = y / 2;
	// display the labels
	document.getElementById("templabel").innerHTML = templabel
	document.getElementById("templabel").innerHTML = datelabel
}