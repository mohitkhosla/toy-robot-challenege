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

  if (position.facing === "NORTH") newY++;
  else if (position.facing === "EAST") newX++;
  else if (position.facing === "SOUTH") newY--;
  else if (position.facing === "WEST") newX--;

  if (isValidPosition(newX, newY)) {
    position.x = newX;
    position.y = newY;
  } else {
    console.log("Invalid move. Robot will fall off the grid.");
  }
}

export const left = () => {
  switch (position.facing) {
    case "NORTH":
      position.facing = "WEST";
      break;
    case "EAST":
      position.facing = "NORTH";
      break;
    case "SOUTH":
      position.facing = "EAST";
      break;
    case "WEST":
      position.facing = "SOUTH";
      break;
  }
}

export const right = () => {
  switch (position.facing) {
    case "NORTH":
      position.facing = "EAST";
      break;
    case "EAST":
      position.facing = "SOUTH";
      break;
    case "SOUTH":
      position.facing = "WEST";
      break;
    case "WEST":
      position.facing = "NORTH";
      break;
  }
}

export const report = () => {
  console.log(`Output: ${position.x},${position.y},${position.facing}`);
}

export const isValidPosition = (x, y) => {
  return x >= 0 && x <= 4 && y >= 0 && y <= 4;
}