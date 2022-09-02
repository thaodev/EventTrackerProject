package com.skillsdistillery.stocktracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

}
