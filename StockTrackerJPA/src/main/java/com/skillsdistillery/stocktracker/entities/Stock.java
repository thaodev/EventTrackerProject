package com.skillsdistillery.stocktracker.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="stocks")
public class Stock {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String symbol;
	
	private String company;
	
	@Column(name="pe_ratio")
	private Double peRatio;
	
	@Column(name="number_of_shares")
	private String numberOfShares;
	
	private LocalDate date;
	
	@Column(name="close_price")
	private Double closePrice;
	
	@ManyToOne
	@JoinColumn(name="sector_id")
	private Sector sector;

	public Stock() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public Double getPeRatio() {
		return peRatio;
	}

	public void setPeRatio(Double peRatio) {
		this.peRatio = peRatio;
	}

	public String getNumberOfShares() {
		return numberOfShares;
	}

	public void setNumberOfShares(String numberOfShares) {
		this.numberOfShares = numberOfShares;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public Double getClosePrice() {
		return closePrice;
	}

	public void setClosePrice(Double closePrice) {
		this.closePrice = closePrice;
	}
	

	public Sector getSector() {
		return sector;
	}

	public void setSector(Sector sector) {
		this.sector = sector;
	}

	@Override
	public String toString() {
		return "Stock [id=" + id + ", symbol=" + symbol + ", company=" + company + ", peRatio=" + peRatio
				+ ", numberOfShares=" + numberOfShares + ", date=" + date + ", closePrice=" + closePrice + ", sector="
				+ sector.getName() + "]";
	}
	

}
