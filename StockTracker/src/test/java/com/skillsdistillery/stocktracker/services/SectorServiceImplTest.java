package com.skillsdistillery.stocktracker.services;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.skillsdistillery.stocktracker.entities.Sector;

@SpringBootTest
class SectorServiceImplTest {
	

	@Autowired
	private SectorService sectorServ;


	@Test
	void test_Sector_Service_mapping() {
		List<Sector> sectorList = sectorServ.sectorList();
		assertEquals(11, sectorList.size());
	}

}
