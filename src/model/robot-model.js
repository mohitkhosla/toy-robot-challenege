import { DIRECTIONS } from '../utils/constants.js'

let position = {
  x: null,
  y: null,
  facing: null,
};

export const place = (x, y, facing) => {
  position = { x, y, facing };
}

export const move = () => {
  let newX = position.x;
  let newY = position.y;

  if (position.facing === DIRECTIONS.NORTH) newY++;
  else if (position.facing === DIRECTIONS.EAST) newX++;
  else if (position.facing === DIRECTIONS.SOUTH) newY--;
  else if (position.facing === DIRECTIONS.WEST) newX--;

  if (isValidPosition(newX, newY)) {
    position.x = newX;
    position.y = newY;
  } else {
    console.log("Invalid move. Robot will fall off the grid.");
  }
}

export const left = () => {
  switch (position.facing) {
    case DIRECTIONS.NORTH:
      position.facing = DIRECTIONS.WEST;
      break;
    case DIRECTIONS.WEST:
      position.facing = DIRECTIONS.SOUTH;
      break;
    case DIRECTIONS.SOUTH:
      position.facing = DIRECTIONS.EAST;
      break;
    case DIRECTIONS.EAST:
      position.facing = DIRECTIONS.NORTH;
      break;
  }
}

export const right = () => {
  switch (position.facing) {
    case DIRECTIONS.NORTH:
      position.facing = DIRECTIONS.EAST;
      break;
    case DIRECTIONS.EAST:
      position.facing = DIRECTIONS.SOUTH;
      break;
    case DIRECTIONS.SOUTH:
      position.facing = DIRECTIONS.WEST;
      break;
    case DIRECTIONS.WEST:
      position.facing = DIRECTIONS.NORTH;
      break;
  }
}

export const report = () => {
  console.log(`Output: ${position.x},${position.y},${position.facing}`);
}

export const isValidPosition = (x, y) => {
  return x >= 0 && x <= 4 && y >= 0 && y <= 4;
}

export const isValidDirection = (direction) => {
  const validDirections = Object.keys(DIRECTIONS);
  return validDirections.includes(direction);
}