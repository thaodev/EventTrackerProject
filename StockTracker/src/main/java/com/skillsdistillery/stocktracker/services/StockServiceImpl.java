package com.skillsdistillery.stocktracker.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillsdistillery.stocktracker.entities.Sector;
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

	@Override
	public Stock addStockBySector(int sectorId, Stock stock) {
		Sector sector = secRepo.findById(sectorId);
		if (sector != null ) {
			stock.setSector(sector);
			stockRepo.save(stock);
			return stock;
		}
		return null;
	}
	

	@Override
	public Stock updateStock(Stock stock, int stockId) {
		Stock existing = stockRepo.findById(stockId);
		if (existing == null) {
			return null;
		}
		if (stock.getClosePrice() != null) {
			existing.setClosePrice(stock.getClosePrice());
		}
		if (stock.getCompany() != null) {
			existing.setCompany(stock.getCompany());
		}
		
		if (stock.getDate() != null) {
			existing.setDate(stock.getDate());
		}
		
		if (stock.getNumberOfShares() != null) {
			existing.setNumberOfShares(stock.getNumberOfShares());
		}
		
		if (stock.getPeRatio() != null) {
			existing.setPeRatio(stock.getPeRatio());
		}
		
		if (stock.getSector() != null) {
			existing.setSector(stock.getSector());
		}
		
		if (stock.getSymbol() != null) {
			existing.setSymbol(stock.getSymbol());
		}
		return stockRepo.saveAndFlush(existing);
	}
	

	@Override
	public boolean isStockDeletedFromSector(int sectorId, int stockId) {
		boolean isDeleted = false;
		Stock stockToDelete = stockRepo.findBySector_IdAndId(sectorId,stockId);
		if (stockToDelete != null) {
			stockRepo.delete(stockToDelete);
			isDeleted = true;
			
		}
		return isDeleted;
	}

	


}
