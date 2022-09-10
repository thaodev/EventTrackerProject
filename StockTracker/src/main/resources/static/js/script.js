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
	//getStocks();
	getSectors();
}
function getStocks() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/stocks");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				//displayStocks(JSON.parse(xhr.responseText));
			}
			else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	};
	xhr.send();
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
		li.addEventListener('click', function(event) {
			let sectorHeader = document.getElementById("sectorHeader");			
			sectorHeader.textContent = "Stocks under sector: " +  li.textContent;	
			getStocksBySector(sector.id);
		})
	}
}

function getStocksBySector(sectorId) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/sectors/" + sectorId + "/stocks");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayStocksBySector(JSON.parse(xhr.responseText));//convert json to js object
				console.log(JSON.parse(xhr.responseText));
			}
			else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayStocksBySector(stocks) {
	let stockDiv = document.getElementById("stockList");
	stockDiv.textContent = '';
	let ul = document.createElement('ul');
	stockDiv.appendChild(ul);

	if (stocks.length == 0) {
		let p = document.createElement('p');
		p.textContent = "There is no stock found.";
		stockDiv.appendChild(p);
	} else {
		for (let stock of stocks) {
			let li = document.createElement('li');
			li.textContent = stock.symbol;
			ul.appendChild(li);
		}
	}

}

