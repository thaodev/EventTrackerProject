package com.skillsdistillery.stocktracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillsdistillery.stocktracker.entities.Stock;
import com.skillsdistillery.stocktracker.services.StockService;

@RestController
@RequestMapping("api")
public class StockController {
	
	@Autowired
	private StockService stockServ;
	
	@GetMapping("stocks")
	public List<Stock> index(){
		return stockServ.stockList();
	}
	
	@GetMapping("stocks/{stockId}")
	public Stock findStockById(@PathVariable int stockId, HttpServletResponse res){
		
		Stock stockToRetieve;
		try {
			stockToRetieve = stockServ.findStockById(stockId);
			if (stockToRetieve == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			stockToRetieve  = null;
		}
		
		return stockToRetieve;
	}
	
	@GetMapping("/sectors/{sectorId}/stocks")
	public List<Stock> findStocksBySector(@PathVariable int sectorId, HttpServletResponse res){
		List<Stock> stocks = stockServ.findStocksBySector(sectorId);
		if (stocks == null) {
			res.setStatus(404);
		}
		return stocks;
	}
	
	@PostMapping("/sectors/{sectorId}/stock")
	public Stock createNewCommentOnAPost(@PathVariable Integer sectorId, @RequestBody Stock stock, HttpServletRequest req, HttpServletResponse res){
		Stock stockAdded;
		try {
			 stockAdded = stockServ.addStockBySector(sectorId, stock);
			res.setStatus(201);
			StringBuffer url = req.getRequestURL();
			url.append("/").append(stock.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			res.setStatus(400);
			 stockAdded = null;
		}
		
		return stockAdded;
	}
	
	@PutMapping("stocks/{id}")
	public Stock updateStock(@PathVariable("id") Integer id, @RequestBody Stock stock, HttpServletResponse res) {
		Stock stockToUpdate;
		try {
			stockToUpdate = stockServ.updateStock( stock, id);
			if (stockToUpdate == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			stock  = null;
		}
		
		return stock;
	}
	
	@DeleteMapping("sectors/{sectorId}/stocks/{sid}")
	public void deleteComment(@PathVariable Integer sectorId, @PathVariable Integer sid, HttpServletResponse res) {
		try {
			if (stockServ.isStockDeletedFromSector(sectorId, sid)) {
				res.setStatus(204);
			}else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		
	}
	

}
