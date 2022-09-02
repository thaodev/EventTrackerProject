package com.skillsdistillery.stocktracker.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillsdistillery.stocktracker.entities.Stock;

public interface StockRepository extends JpaRepository<Stock, Integer> {
	Stock findById(int stockId);
	List<Stock> findBySectorId(int sectorId);

}
