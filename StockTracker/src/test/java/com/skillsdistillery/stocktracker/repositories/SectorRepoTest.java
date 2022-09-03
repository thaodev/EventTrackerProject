package com.skillsdistillery.stocktracker.repositories;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skillsdistillery.stocktracker.entities.Sector;
import com.skillsdistillery.stocktracker.repositories.SectorRepository;

@SpringBootTest
class SectorRepoTest {
	
	@Autowired
	private SectorRepository repo;

	@Test
	void test_sector_repo() {
		List<Sector> sectors = repo.findAll();
		assertNotNull(sectors);
	}

}
