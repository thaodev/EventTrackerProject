# EventTrackerProject

## Individual portfolio project for Skill Distillery

## Overview

### This project is to keep track of stocks by sector overtime. Stock information include date, price, amount, PE ratio, number of shares. User can get list of all stocks and by sector, single stock by Id or by sector. User can also create stock by sector, update and delete stock by id.

## REST Endpoints

| HTTP Verb | URI                      | Request Body            | Response Body   | Purpose |
|-----------|--------------------------|-------------------------|-----------------|---------|
| GET       | `/api/stocks`            |                         | List of Stocks  | **List** or **collection** endpoint |
| GET       | `/api/stocks/{stockId}`  |                         | Single stock | **Retrieve** endpoint
| GET       | `/api/sectors/{sectorId}/stocks` |                 | Stocks By Sector| **Retrieve** endpoint
| GET       | `/api/sectors/{sectorId}/stocks/{stockId}` |       | Single stock| **Retrieve** endpoint
| POST      | `/api/sectors/{sectorId}/stock`| JSON for a new Stock   | Created stock by sector| **Create** endpoint |
| PUT       | `/api/stocks/{stockId}`| JSON for updating stock| Updated stock by id| **Replace** endpoint |
| DELETE    | `/api/stocks/{stockId}`|                         |                | **Delete** route |

## How to Run

### TODO!!! URL OF DEPLOYED APP

## Technologies Used

* Java
* Spring, Spring Boot
* Spring data JPA
* Eclipse
* Postman

## Lessons Learned
* Using variety of HTTP Status codes, depending in on the content of response body.
* Using Spring HTTP Status to test api endpoints connection.
* Connecting entities to corresponding tables on MySQL database.
* Using Postman to test api connections.
* Using @JsonIgnore and @JsonIgnoreProperties to ignore the logical class and property used in serialization (response) and deserialization (request).
