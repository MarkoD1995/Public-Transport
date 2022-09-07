# Public transport Guide - Node.js backend service

Service for finding connections between two places in Switzerland via public transport.

Made with Node.js (Express framework).

This service is using public Api for finding all possible ways for particular trip : https://transport.opendata.ch/

# Project run
1. Clone project
2. npm install
3. npm run dev 

# Test run
1. npm run test

# Libraries used:
1. Moment js
2. Jest
3. Joi


This service contains only one route, which takes parameters via query. 

Possible parameters:

1. from
2. to
3. date

Request example:

[GET] http://localhost:7070/v1/transportCalculation?from=Zurich&to=Basel&date=2022/09/02
