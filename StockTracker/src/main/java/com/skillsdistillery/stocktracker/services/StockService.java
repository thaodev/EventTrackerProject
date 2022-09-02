package com.skillsdistillery.stocktracker.services;

import java.util.List;

import com.skillsdistillery.stocktracker.entities.Stock;

public interface StockService {
	List<Stock> stockList();
	Stock findStockById(int stockId);
	List<Stock> findStocksBySector(int sectorId);
	

}