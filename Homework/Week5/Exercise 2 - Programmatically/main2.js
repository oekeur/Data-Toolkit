/* use this to test out your function */
window.onload = function() {
 	Continents();
	changeColor("id" , "#33cc33")
	changeColor("aq" , "#33cc33")
	changeColor("sd" , "#33cc33")
	changeColor("gb" , "#33cc33")
}

continents = {
	AS : [],
	EU : [],
	NA : [],
	SA : [],
	OC : []
}

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


/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
         document.getElementById(id).style.fill=color
}