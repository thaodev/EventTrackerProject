package com.skillsdistillery.stocktracker.repositories;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skillsdistillery.stocktracker.entities.Stock;
import com.skillsdistillery.stocktracker.repositories.StockRepository;

@SpringBootTest
class StockRepoTest {
	
	@Autowired
	private StockRepository repo;

	@Test
	void test_stock_repo() {
		List<Stock> stocks = repo.findAll();
		assertNotNull(stocks);
	}
	
	@Test
	void test_stocks_by_sector_id() {
		List<Stock> stocks = repo.findBySectorId(1);
		assertNotNull(stocks);
		assertTrue(stocks.size() > 0);
	}

}
