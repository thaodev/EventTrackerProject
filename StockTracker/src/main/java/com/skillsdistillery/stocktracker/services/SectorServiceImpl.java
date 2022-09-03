package com.skillsdistillery.stocktracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillsdistillery.stocktracker.entities.Sector;
import com.skillsdistillery.stocktracker.repositories.SectorRepository;

@Service
public class SectorServiceImpl implements SectorService {
	
	@Autowired
	private SectorRepository secRepo;

	@Override
	public List<Sector> sectorList() {
		return secRepo.findAll();
	}

}
