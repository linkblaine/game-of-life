# Conway's Game of Life
The following repo is a basic implementation of Conway's game of life. It is built on node, runs jasmine for testing with Karma for the test runner.


## Setup

```terminal
npm install
```
## Testing
```terminal
npm test
```

## Running
```terminal
npm start
```

## Changing Initial Board
The game board by default is set to be one single blinker. The Board is dynamically created by the input of the intital state.

To change the initial state of the board, modify the main.js file to pass in the new board state.

**Rules**

1. Everyline must end in a comma, including the last line.
2. Dead Cells are represented by a '-'.
3. Alive Cells are represented by a  'x'.

**main.js**

```javascript

var initialState = 
'--------------------,' +
'------------xx------,' +
'-----------xx-------,' +
'----xx----xx--------,' +
'-----xx-xx---x------,' +
'x-x---xx-----x------,' +                                                                                            
'x-x----xx----x------,' + 
'x--xx---------------,' +
'xxx---xx--xxx-------,' +
'x------------------,' +
'x-------------------,';

var game = new Game(initialState); 
```
