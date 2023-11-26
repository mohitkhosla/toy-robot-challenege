import { DIRECTIONS } from "../utils/constants.js";

let position = {
  x: null,
  y: null,
  facing: null,
};

/**
 * Places the robot at a specified position
 * @param {number} x - x-coordinate
 * @param {number} y - y-coordinate
 * @param {string} facing - The facing direction (NORTH, EAST, SOUTH, WEST)
 */
export const place = (x, y, facing) => {
  position = { x, y, facing };
};

/**
 * Moves the robot one unit in the current facing direction
 */
export const move = () => {
  let newX = position.x;
  let newY = position.y;

  // Update coordinates based on the current facing direction
  if (position.facing === DIRECTIONS.NORTH) newY++;
  else if (position.facing === DIRECTIONS.EAST) newX++;
  else if (position.facing === DIRECTIONS.SOUTH) newY--;
  else if (position.facing === DIRECTIONS.WEST) newX--;

  // Check if the new position is within the valid range
  if (isValidPosition(newX, newY)) {
    position.x = newX;
    position.y = newY;
  } else {
    console.log("Invalid move. Robot will fall off the grid.");
  }
};

/**
 * Rotates the robot 90 degrees to the left
 */
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
};

/**
 * Rotates the robot 90 degrees to the right
 */
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
};

/**
 * Displays the current position and direction of the robot
 */
export const report = () => {
  console.log(`Output: ${position.x},${position.y},${position.facing}`);
};

/**
 * Checks if a specified position is within the valid grid range (0 to 4)
 * @param {number} x - x-coordinate
 * @param {number} y - y-coordinate
 * @returns {boolean} - True if the position is valid, false otherwise
 */
export const isValidPosition = (x, y) => {
  return x >= 0 && x <= 4 && y >= 0 && y <= 4;
};

/**
 * Checks if a specified direction is valid
 * @param {string} direction - The facing direction (NORTH, EAST, SOUTH, WEST)
 * @returns {boolean} - True if the direction is valid, false otherwise
 */
export const isValidDirection = (direction) => {
  const validDirections = Object.keys(DIRECTIONS);
  return validDirections.includes(direction);
};
