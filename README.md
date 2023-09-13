# Daily Balance REST Endpoint

## Intro

This repository contains the implementation of a REST endpoint that allows you to fetch the daily balance for a specific date range. The endpoint is designed to respond to GET requests with the following format:

```bash
GET /historical-balances?from=2022-01-03&to=2022-01-05&sort=desc
```

The response will be a list of balances for the specified date range in the following JSON format:

```bash
[ 
    { 
        "date": "05/01/2022", 
        "amount": 12345, 
        "currency": "EUR" 
    }, 
    { 
        "date": "04/01/2022", 
        "amount": 12345, 
        "currency": "EUR" 
    }, 
    { 
        "date": "03/01/2022", 
        "amount": 12345, 
        "currency": "EUR" 
    }
]
```

## Table of Contents

- Installation
- Usage
- Assumptions and Explanations
- Unit Tests
- Contributing


## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies:

```bash
npm install
```
4. Create a .env file in the project root directory and add your API key:

```bash
apiKey=your-api-key-here
```

## Usage

To start the server, run the following command:

```bash
npm start
```

To fetch historical balances, make a GET request to the /historical-balances endpoint with the following query parameters:

- from: The start date of the date range (e.g., 2022-01-03).
- to: The end date of the date range (e.g., 2022-01-05).
- sort: The sorting order (asc or desc).

Example request:
```bash
GET http://localhost:PORT/historical-balances?from=2022-01-03&to=2022-01-05&sort=desc
```

## Assumptions and Explanations
Here are some assumptions and explanations regarding the code:

1. Current Date and Time: The code uses a default current date and time of '2022-06-30T23:59:59.577Z'. So transactions done before that time will affect the current balance. 

2. Excluding Cancelled Transactions: The code filters out cancelled transactions from the historical balance calculation. This ensures that only non-cancelled transactions affect the daily balance.

## Unit Tests
Unit tests are included to ensure the reliability of the code. To run the unit tests, use the following command:

```bash
npm test
```

## Contributing
If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m "Description of your changes".
4. Push your changes to your fork: git push origin feature-name.
5. Create a pull request to merge your changes into the main repository.