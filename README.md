# FlydevsChallenge
Back-end Challenge

# About the Challenge

There are many factors to consider when picking your next beer. One of the most important ones is bitterness. The International Bitternes Unit (IBU) is the unit used to measure the bitterness of a beer.

We would love to be able to recommend our customers what is the best combination of beers for them.

How do we do it? We ask our customers what's the exact level of bitterness they are looking for and we will suggest them two different beers that together sum up to that number.

For example, if we have the following beers.

| Brand | IBU 
| :---:   | :-: | 
| Patagonia | 36 |
| Quilmes Stout | 36 |
| Quilmes Cristal | 15 |
| Stella Artois | 24 |

And our customer ask for a total IBU of 39, our system could answer Quilmes Cristal and Stella Artois because 15 + 24 = 39.

## Considerations

- In case no valid sum is found, the recommender should return an empty array
- The function gets a list of IBUS (integer values greater than 0) and a target value
- It must return one solution only (there may be more than one)
- The signature of the method should be:
  ``
    findTwoBeers(beers: number[], target: number) : number[]
  ``
- The return value must be an array with two items (in case a solution exists), or an empty array in case no answer exists. Return values should be the index of the input array.

# Setup

Clone this repo to your desktop and run npm install to install all the dependencies.

# Usage

After you clone this repo to your desktop, go to its root directory and run npm install to install its dependencies.

Once the dependencies are installed, you can run `` npm start `` to start the application. You will then be able to access it at localhost:3000.

Also you can run `` npx jest `` to run the unit tests.

# Test examples

### The return value must be an array with two items.

Request
```
URL : http://localhost:3000/beers/findTwoBeers
POST /beers/findTwoBeers
{
  beers: [15, 20, 25, 39, 12, 18, 19, 21], 
  target: 35
}
```

Response
```
Status: 200
Response body (application/json)
{
    "index": [ 0, 1 ]
}
```

### The return value must be an empty array.

Request
```
URL : http://localhost:3000/beers/findTwoBeers
POST /beers/findTwoBeers
{
  beers: [10, 15, 20], 
  target: 40
}
```

Response
```
Status: 200
Response body (application/json)
{
    "index": []
}
```
