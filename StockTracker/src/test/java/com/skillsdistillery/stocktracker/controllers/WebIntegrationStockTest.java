package com.skillsdistillery.stocktracker.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.skillsdistillery.stocktracker.entities.Sector;
import com.skillsdistillery.stocktracker.entities.Stock;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class WebIntegrationStockTest {

	private static String url = "/api/stocks";
	private static String url2 = "/api/sectors";
	
	
	@Autowired
	private TestRestTemplate restTest;
	
	
	@Test
	void test_stock_list() {
		@SuppressWarnings("rawtypes")
		ResponseEntity<List> entity = restTest.getForEntity(url, List.class);
		assertEquals(HttpStatus.OK, entity.getStatusCode());
		@SuppressWarnings("unchecked")
		List<Stock> stocks = (List<Stock>)entity.getBody();
		assertTrue(stocks.size() > 0);
	}
	
	@Test
	void test_stocks_retrieve_by_Sector() {
		int sectorId = 1;
		ResponseEntity<List> entity = restTest.getForEntity(url2 + "/" + sectorId + "/stocks", List.class);
		assertEquals(HttpStatus.OK, entity.getStatusCode());
		@SuppressWarnings("unchecked")
		List<Stock> stocks = (List<Stock>)entity.getBody();
		assertTrue(stocks.size() > 0);
		
	}
	
	@Test
	public void test_stock_retrieve_returns_404_for_invalid_id() {
		int stockId = 999999;
		ResponseEntity<Stock> entity = restTest.getForEntity(url + "/" + stockId, Stock.class);
		assertEquals(HttpStatus.NOT_FOUND, entity.getStatusCode());
	}
	
	@Test
	public void test_stock_create_by_sector() {
		int sectorId = 1;
		Stock newStock = new Stock();
		newStock.setCompany("New test Company");
		Sector sector = new Sector();
		sector.setId(sectorId);
        newStock.setSector(sector);
		ResponseEntity<Stock> entity = restTest.postForEntity(url2 + "/" + sectorId + "/stock" , newStock, Stock.class);
		assertEquals(HttpStatus.CREATED, entity.getStatusCode());
		Stock stock = (Stock)entity.getBody();
		assertNotNull(stock);
	}
	
	@Test
	public void test_stock_delete_by_sector() {
		int sectorId = 1;
		Stock newStock = new Stock();
		newStock.setCompany("NEW STOCK TO DELETE");
		Sector sector = new Sector();
		sector.setId(1);
		newStock.setSector(sector);
		ResponseEntity<Stock> entity = restTest.postForEntity(url2 + "/" + sectorId + "/stock", newStock, Stock.class);
		assertEquals(HttpStatus.CREATED, entity.getStatusCode());
		Stock stock = (Stock)entity.getBody();
		assertNotNull(stock);
		int idToDelete = stock.getId();
		restTest.delete(url2 + "/" + sectorId + "/stocks/" + idToDelete);
		assertEquals(HttpStatus.NOT_FOUND,restTest.getForEntity(url + "/" + idToDelete, Stock.class).getStatusCode());
	}

}
