package com.skillsdistillery.stocktracker.services;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skillsdistillery.stocktracker.entities.Stock;

@SpringBootTest
class StockServiceImplTest {
	

	@Autowired
	private StockService stockServ;


	@Test
	void test_stock_Service_mapping() {
		List<Stock> stockList = stockServ.stockList();
		assertNotNull(stockList);
	}
	
	@Test
	void test_find_stock_by_sector() {
		List<Stock> stocks = stockServ.findStocksBySector(1);
		assertTrue(stocks.size() > 0);
	}

}
