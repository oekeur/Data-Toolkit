/* use this to test out your function */
window.onload = function() {
 	Continents();
 	Data();
 	// changeColor("us", "#000099")
}

continents = {
	AS : [],
	EU : [],
	NA : [],
	SA : [],
	OC : []
}

data = []

function Continents () {
	json = JSON.parse(document.getElementById('countries').innerHTML);
	for (var i = 0; i < json.country.length; i++) {
		if (json.country[i].continent == "EU") {
			continents.EU.push(json.country[i].countryCode.toLowerCase())};
		if (json.country[i].continent == "AS") {
			continents.AS.push(json.country[i].countryCode.toLowerCase())};
		if (json.country[i].continent == "NA") {
			continents.NA.push(json.country[i].countryCode.toLowerCase())};
		if (json.country[i].continent == "SA") {
			continents.SA.push(json.country[i].countryCode.toLowerCase())};
		if (json.country[i].continent == "OC") {
			continents.OC.push(json.country[i].countryCode.toLowerCase())};
	}
	
}

function Data () {
	json2 = JSON.parse(document.getElementById('data').innerHTML);
	for (var i = 0; i < json2.length; i++) {
		data.push(Number(json2[i].value))
	}
	data.sort(function(a, b){return a-b});


	for (var i = 0; i < json.country.length; i++) {
		if (json2[i].value <= 50) {
			changeColor(json.country[i].countryCode.toLowerCase(), "#f7f7f7")};
		if (json2[i].value > 50 && json2[i].value <= 100) {
			changeColor(json.country[i].countryCode.toLowerCase(), "#d9d9d9")};
		if (json2[i].value > 100 && json2[i].value <= 200) {
			changeColor(json.country[i].countryCode.toLowerCase(), "#bdbdbd")};
		if (json2[i].value > 200 && json2[i].value <= 400) {
			changeColor(json.country[i].countryCode.toLowerCase(), "#969696")};
		if (json2[i].value > 400 && json2[i].value <= 1000) {
			changeColor(json.country[i].countryCode.toLowerCase(), "#636363")};
		if (json2[i].value > 1000) {
			changeColor(json.country[i].countryCode.toLowerCase(), "#252525")};
	}
	
}


/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
         document.getElementById(id).style.fill=color
}