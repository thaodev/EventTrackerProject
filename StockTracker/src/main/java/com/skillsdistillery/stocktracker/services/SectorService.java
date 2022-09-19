package com.skillsdistillery.stocktracker.services;

import java.util.List;

import com.skillsdistillery.stocktracker.entities.Sector;

public interface SectorService {
	
	List<Sector> sectorList();
	Sector showSectorById(int id);

}
