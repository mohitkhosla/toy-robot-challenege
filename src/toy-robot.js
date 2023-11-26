// Toy Robot Simulation

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let position = { 
    x: null, 
    y: null, 
    facing: null 
};

function place(x, y, facing) {
  position = { x, y, facing };
}

function move() {
  let newX = position.x;
  let newY = position.y;

  if (position.facing === 'NORTH') newY++;
  else if (position.facing === 'EAST') newX++;
  else if (position.facing === 'SOUTH') newY--;
  else if (position.facing === 'WEST') newX--;

  // Check if the new position is within the valid range (0 to 4 for both x and y)
  if (isValidPosition(newX, newY)) {
    position.x = newX;
    position.y = newY;
  } else {
    console.log('Invalid move. Robot will fall off the grid.');
  }
}

function left() {
  switch (position.facing) {
    case 'NORTH':
      position.facing = 'WEST';
      break;
    case 'EAST':
      position.facing = 'NORTH';
      break;
    case 'SOUTH':
      position.facing = 'EAST';
      break;
    case 'WEST':
      position.facing = 'SOUTH';
      break;
  }
}

function right() {
  switch (position.facing) {
    case 'NORTH':
      position.facing = 'EAST';
      break;
    case 'EAST':
      position.facing = 'SOUTH';
      break;
    case 'SOUTH':
      position.facing = 'WEST';
      break;
    case 'WEST':
      position.facing = 'NORTH';
      break;
  }
}

function report() {
  console.log(`Output: ${position.x},${position.y},${position.facing}`);
}

function handlePlaceCommand(placeCommandArgs) {
    if (placeCommandArgs.length !== 3) {
        console.log('Invalid PLACE command format.');
        return;
      }
      const x = parseInt(placeCommandArgs[0]);
      const y = parseInt(placeCommandArgs[1]);
      const facing = placeCommandArgs[2];
      if (isValidPosition(x, y)) {
        place(x, y, facing);
      } else {
        console.log('Invalid PLACE command. Robot will fall off the grid.');
      }
}

function processCommand(command) {
    // It allows for splitting the string based on both spaces and commas.
    const args = command.trim().split(/[,\s]+/);

    if (args.length === 0) {
      console.log('Invalid command.');
      return;
    }
  
    const action = args[0].toUpperCase();
  
    switch (action) {
      case 'PLACE':
        const placeCommandArgs = args.slice(1);
        handlePlaceCommand(placeCommandArgs)
        break;
      case 'MOVE':
        move();
        break;
      case 'LEFT':
        left();
        break;
      case 'RIGHT':
        right();
        break;
      case 'REPORT':
        report();
        break;
      default:
        console.log('Invalid command.');
        break;
    }
  }  

function isValidPosition(x, y) {
  return x >= 0 && x <= 4 && y >= 0 && y <= 4;
}

function startRobot() {

  console.log(
    'Enter commands for the toy robot (or type "QUIT" to exit).\n' +
    'Commands: PLACE X,Y,FACING | MOVE | LEFT | RIGHT | REPORT\n' +
    'Example: PLACE 0,0,NORTH\n'
  );

  function processInput() {
    rl.question(
      '> ',
      (command) => {
        if (command.trim().toUpperCase() === 'QUIT') {
          rl.close();
        } else {
          processCommand(command);
          processInput();
        }
      }
    );
  }

  processInput();
}

startRobot();
