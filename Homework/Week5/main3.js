/* use this to test out your function */
window.onload = function() {
 	// Continents();
 	Data();
 	// changeColor("US", "#000099")
}

data = []
countries = ["AE","AF","AL","AM","AO","AR","AT","AU","AZ","BA","BD","BE","BF","BG","BI","BJ","BN","BO","BR","BS","BT","BW","BY","BZ","CA","CD","CF","CG","CH","CI","CL","CM","CN","CO","CR","CU","CY","CZ","DE","DJ","DK","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FK","FI","FJ","FR","GA","GB","GE","GF","GH","GL","GM","GN","GQ","GR","GT","GW","GY","HN","HR","HT","HU","ID","IE","IL","IN","IQ","IR","IS","IT","JM","JO","JP","KE","KG","KH","KP","KR","XK","KW","KZ","LA","LB","LK","LR","LS","LT","LU","LV","LY","MA","MD","ME","MG","MK","ML","MM","MN","MR","MW","MX","MY","MZ","NA","NC","NE","NG","NI","NL","NO","NP","NZ","OM","PA","PE","PG","PH","PL","PK","PR","PS","PT","PY","QA","RO","RS","RU","RW","SA","SB","SD","SE","SI","SJ","SK","SL","SN","SO","SR","SS","SV","SY","SZ","TD","TF","TG","TH","TJ","TL","TM","TN","TR","TT","TW","TZ","UA","UG","US","UY","UZ","VE","VN","VU","YE","ZA","ZM","ZW"]


function Data () {
	json = JSON.parse(document.getElementById('data').innerHTML);
	for (var i = 0; i < json.length; i++) {
		for (var j = countries.length - 1; j >= 0; j--) {
			if (json[i].code == countries[j]) {
				data.push([json[i].code, json[i].value])
			};
		};
	}


	for (var i = 0; i < data.length; i++) {
		if (data[i][1] <= 10) {
			changeColor(data[i][0], "#f7f7f7")};
		if (data[i][1] > 10 && data[i][1] <= 75) {
			changeColor(data[i][0], "#d9d9d9")};
		if (data[i][1] > 75 && data[i][1] <= 175) {
			changeColor(data[i][0], "#bdbdbd")};
		if (data[i][1] > 175 && data[i][1] <= 350) {
			changeColor(data[i][0], "#969696")};
		if (data[i][1] > 350 && data[i][1] <= 1000) {
			changeColor(data[i][0], "#636363")};
		if (data[i][1] > 1000) {
			changeColor(data[i][0], "#252525")};
	}
	
}


/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
         document.getElementById(id).style.fill=color
}