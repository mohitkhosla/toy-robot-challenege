import * as RobotModel from '../model/robot-model.js';
import * as RobotView from '../view/robot-view.js';

const handlePlaceCommand = (placeCommandArgs) => {
  if (placeCommandArgs.length !== 3) {
    console.log('Invalid PLACE command format.');
    return;
  }
  const x = parseInt(placeCommandArgs[0]);
  const y = parseInt(placeCommandArgs[1]);
  const facing = placeCommandArgs[2].toUpperCase();
  if (RobotModel.isValidPosition(x, y) && RobotModel.isValidDirection(facing)) {
    RobotModel.place(x, y, facing);
  } else {
    console.log('Invalid PLACE command.');
  }
}

export const processCommand = (command) => {
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
      handlePlaceCommand(placeCommandArgs);
      break;
    case 'MOVE':
      RobotModel.move();
      break;
    case 'LEFT':
      RobotModel.left();
      break;
    case 'RIGHT':
      RobotModel.right();
      break;
    case 'REPORT':
      RobotModel.report();
      break;
    default:
      console.log('Invalid command.');
      break;
  }
}

export const main = () => {
  console.log(
    'Enter commands for the toy robot (or type "QUIT" to exit).\n' +
      'Commands: PLACE X,Y,FACING | MOVE | LEFT | RIGHT | REPORT\n' +
      'Example: PLACE 0,0,NORTH\n'
  );

  const processInput = () => {
    RobotView.getInput((command) => {
      if (command.trim().toUpperCase() === 'QUIT') {
        RobotView.closeInput();
      } else {
        processCommand(command);
        processInput();
      }
    });
  }

  processInput();
}
