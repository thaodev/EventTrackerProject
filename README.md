# EventTrackerProject

## Individual portfolio project for Skill Distillery

## Overview

### TODO!!! WRITE OVERVIEW

## REST Endpoints

| HTTP Verb | URI                      | Request Body            | Response Body   | Purpose |
|-----------|--------------------------|-------------------------|-----------------|---------|
| GET       | `/api/stocks`            |                         | List of Stocks  | **List** or **collection** endpoint |
| GET       | `/api/stocks/{stockId}`  |                         | Single stock | **Retrieve** endpoint
| GET       | `/api/sectors/{sectorId}/stocks` |                 | Stocks By Sector| **Retrieve** endpoint
| GET       | `/api/sectors/{sectorId}/stocks/{stockId}` |       | Single stock| **Retrieve** endpoint
| POST      | `/api/sectors/{sectorId}/stock`| JSON for a new Stock   | Created stock by sector| **Create** endpoint |
| PUT       | `/api/stocks/{stockId}`| JSON for updating stock| Updated stock | **Replace** endpoint |
| DELETE    | `/api/stocks/{stockId}`|                         |                | **Delete** route |

## How to Run

### TODO!!! URL OF DEPLOYED APP

## Technologies Used

* Java
* Spring, Spring Boot
* Spring data JPA
* Eclipse

## Lessons Learned
* Using variety of HTTP Status codes, depending in on the content of response body.
* 
