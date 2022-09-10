window.addEventListener('load', function() {
	console.log('script.js load');
	init();


});

function init() {
	//TODO:

	//-Event handlers for buttons and stuff
	loadAllEvents();
}
const addButton = (event) => {
	event.preventDefault();
	let stock = {
		symbol: addStockForm.symbol.value,
		company: addStockForm.company.value,
	};
	stock.peRatio = addStockForm.peRatio.value;
	stock.numberOfShares = addStockForm.shares.value;
	stock.date = addStockForm.date.value;
	stock.closePrice = addStockForm.price.value;
	stock.sectorId = addStockForm.sectorId.value;
	console.log(stock);
	console.log(stock.id);
	//if (typeof stock.id === 'undefined') {
	addNewStock(stock.sectorId, stock);
	//} else {
	//	updateStock(stock.id, stock);
	//}
};


function loadAllEvents() {

	getSectors();

	document.stockForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let symbolSearch = document.stockForm.symbol.value;
		if (typeof symbolSearch === 'string' && symbolSearch.length > 0) {
			console.log("Symbol Search: " + symbolSearch);
			getStocksBySymbolSearch(symbolSearch);
		}

	});

	document.addStockForm.submit.addEventListener('click', addButton);

}


function getStocksBySymbolSearch(symbolSearch) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/stocks/symbol/" + symbolSearch);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayStockDetailsBySymbol(JSON.parse(xhr.responseText));
			}
			else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	};
	xhr.send();
}

function displayStockDetailsBySymbol(stocks) {
	console.log(stocks);
	let stockDiv = document.getElementById("stockDiv");
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
			li.textContent = "Symbol: " + stock.symbol;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = "Company: " + stock.company;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = "PE Ratio: " + stock.peRatio;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = "Date: " + stock.date;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = "Close Price: " + stock.closePrice;
			ul.appendChild(li);

			li = document.createElement('li');
			li.textContent = "Sector: " + stock.sector.name;
			ul.appendChild(li);

			ul.appendChild(document.createElement('br'));

			let btn1 = document.createElement('button');
			btn1.textContent = "update";
			ul.appendChild(btn1);
			btn1.addEventListener('click', function(e) {
				populatePreexistingStockToTheForm(stock);
			});
			let btn2 = document.createElement('button');
			btn2.textContent = "delete";
			ul.appendChild(btn2);
			btn2.addEventListener('click', function(e) {
				deleteStock(stock.sector.id, stock.id);
			});
		}
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
	let h2 = document.createElement("h2");
	h2.textContent = "Sector List";
	dataDiv.appendChild(h2);
	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);
	for (let sector of sectors) {
		let li = document.createElement('li');
		li.textContent = sector.name;
		ul.appendChild(li);

		li.addEventListener('click', function(event) {

			let sectorHeader = document.getElementById("sectorHeader");
			sectorHeader.textContent = "Stocks under sector: " + li.textContent;
			getStocksBySector(sector.id);
			let lis = document.getElementsByTagName('li');
			for (let li of lis) {
				//if (li.textContent === click) {
				//li.style.backgroundColor = "green";
				//}
				li.style.backgroundColor = "white";
			};
			li.style.backgroundColor = "green";

		});
		//let click = li.textContent;

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

function addNewStock(sectorId, stock) {
	console.log(stock);
	console.log(sectorId);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/sectors/' + sectorId + '/stock');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				console.log('Stock created')
			}
			else if (xhr.status === 400) {
				displayError('Invalid data');
			}
			else {
				displayError('Error creating stock: ' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let stockJson = JSON.stringify(stock);
	let sectorIdJson = JSON.stringify(sectorId);
	console.log(stockJson);
	console.log(sectorIdJson);
	xhr.send(stockJson);
}

function displayError(msg) {
	let addStockResult = document.getElementById('addStockResult');
	addStockResult.textContent = '';
	addStockResult.textContent = msg;
	addStockResult.style.color = 'red';
}

function updateStock(stockId, stock) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/stocks/' + stockId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				console.log('Stock updated')
			}
			else if (xhr.status === 400) {
				displayError('Invalid data');
			}
			else {
				displayError('Error creating stock: ' + xhr.status);
			}
		}
	}
	xhr.setRequestHeader("Content-type", "application/json");
	let stockJson = JSON.stringify(stock);
	console.log(stockJson);
	xhr.send(stockJson);
}



function deleteStock(sectorId, stockId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/sectors/' + sectorId + "/stocks/" + stockId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) {
				console.log('Stock deleted')
			}
			else if (xhr.status === 400) {
				displayError('Invalid data');
			}
			else {
				displayError('Error deleting stock: ' + xhr.status);
			}
		}
	}
	xhr.send();
}

function populatePreexistingStockToTheForm(stock) {
	addStockForm.symbol.value = stock.symbol;
	addStockForm.company.value = stock.company;
	addStockForm.peRatio.value = stock.peRatio;
	addStockForm.shares.value = stock.numberOfShares;
	addStockForm.date.value = stock.date;
	addStockForm.price.value = stock.closePrice;
	addStockForm.sectorId.value = stock.sector.id;
	updateStockForm(stock);


}

function updateStockForm(stock) {

	stock.symbol = document.getElementById("symbol").value;

	stock.company = addStockForm.company.value;
	stock.peRatio = addStockForm.peRatio.value;
	stock.numberOfShares = addStockForm.shares.value;
	stock.date = addStockForm.date.value;
	stock.closePrice = addStockForm.price.value;
	stock.sectorId = addStockForm.sectorId.value;
	console.log("stock to update " + stock.company);
	document.addStockForm.submit.removeEventListener('click', addButton);
	document.addStockForm.submit.addEventListener('click', function(e) {
		e.preventDefault();
		updateStockForm(stock);
		updateStock(stock.id, stock);
		console.log("stock id to update " + stock.id);
	});
	let p = document.createElement('div');
	p.textContent = "addStock button is disable";
	addStockForm.appendChild(p);
}
50.5;