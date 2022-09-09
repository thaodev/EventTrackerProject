window.addEventListener('load', function() {
	console.log('script.js load');
	init();
});

function init() {
	//TODO:
	
	//-Event handlers for buttons and stuff
	loadAllEvents();
}

function loadAllEvents() {
	getStocks();
	getSectors();
}
function getStocks() {
		let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/stocks");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayStocks(JSON.parse(xhr.responseText));
			}
			 else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayStocks(stocks) {
	let dataDiv = document.getElementById("stockList");
	dataDiv.textContent = '';
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	for (let stock of stocks) {
		let li = document.createElement('li');
		li.textContent = stock.symbol;
		ul.appendChild(li);
	}
}
function getSectors() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/sectors");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displaySectors(JSON.parse(xhr.responseText));
				console.log(JSON.parse(xhr.responseText));
			}
			 else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	};
	xhr.send();
}


function displaySectors(sectors) {
	let dataDiv = document.getElementById("sectorList");
	dataDiv.textContent = '';
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	for (let sector of sectors) {
		let li = document.createElement('li');
		li.textContent = sector.name;
		ul.appendChild(li);
	}
}
