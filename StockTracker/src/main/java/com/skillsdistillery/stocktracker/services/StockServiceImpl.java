package com.skillsdistillery.stocktracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillsdistillery.stocktracker.entities.Stock;
import com.skillsdistillery.stocktracker.repositories.SectorRepository;
import com.skillsdistillery.stocktracker.repositories.StockRepository;

@Service
public class StockServiceImpl implements StockService {
	@Autowired
	private StockRepository stockRepo;
	
	@Autowired
	private SectorRepository secRepo;

	@Override
	public List<Stock> stockList() {
		return stockRepo.findAll();
	}

	@Override
	public Stock findStockById(int stockId) {
		Stock stock = stockRepo.findById(stockId);
		return stock;
	}

	@Override
	public List<Stock> findStocksBySector(int sectorId) {
		if (!secRepo.existsById(sectorId)) {
			return null;
		}
		List<Stock> stocks = stockRepo.findBySectorId(sectorId);
		return stocks;
	}


}
