package com.skillsdistillery.stocktracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillsdistillery.stocktracker.entities.Sector;

public interface SectorRepository extends JpaRepository<Sector, Integer> {
	Sector findById(int sectorId);

}
