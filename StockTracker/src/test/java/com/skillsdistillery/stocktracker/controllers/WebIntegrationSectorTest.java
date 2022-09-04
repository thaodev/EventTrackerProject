package com.skillsdistillery.stocktracker.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
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

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class WebIntegrationSectorTest {

	private static String url = "/api/sectors";
	
	@Autowired
	private TestRestTemplate restTest;
	
	
	@Test
	void test_stock_list() {
		@SuppressWarnings("rawtypes")
		ResponseEntity<List> entity = restTest.getForEntity(url, List.class);
		assertEquals(HttpStatus.OK, entity.getStatusCode());
		@SuppressWarnings("unchecked")
		List<Sector> sectors = (List<Sector>)entity.getBody();
		assertTrue(sectors.size() > 0);
	}

}
