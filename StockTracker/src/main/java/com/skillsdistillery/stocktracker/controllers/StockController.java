package com.skillsdistillery.stocktracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillsdistillery.stocktracker.entities.Stock;
import com.skillsdistillery.stocktracker.services.StockService;

@RestController
@RequestMapping("api")
public class StockController {
	
	@Autowired
	private StockService stockServ;
	
	@GetMapping("stocks")
	public List<Stock> index(){
		return stockServ.stockList();
	}
	
	@GetMapping("sectors/{sectorId}/stocks")
	public List<Stock> findStocksBySector(@PathVariable int sectorId, HttpServletResponse res){
		List<Stock> stocks = stockServ.findStocksBySector(sectorId);
		if (stocks == null) {
			res.setStatus(404);
		}
		return stocks;
	}

}
