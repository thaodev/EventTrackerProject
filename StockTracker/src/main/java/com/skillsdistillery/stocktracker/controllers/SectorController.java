package com.skillsdistillery.stocktracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillsdistillery.stocktracker.entities.Sector;
import com.skillsdistillery.stocktracker.services.SectorService;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class SectorController {
	
	@Autowired
	private SectorService secServ;
	
	@GetMapping("sectors")
	public List<Sector> index(){
		return secServ.sectorList();
	}
	@GetMapping("sectors/{sid}")
	public Sector sectorById(@PathVariable Integer sid){
		return secServ.showSectorById(sid);
	}

}
