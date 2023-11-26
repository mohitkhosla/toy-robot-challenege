import * as robotModel from '../model/robot-model.js';
import * as robotView from '../view/robot-view.js';

const handlePlaceCommand = (placeCommandArgs) => {
  if (placeCommandArgs.length !== 3) {
    console.log('Invalid PLACE command format.');
    return;
  }
  const x = parseInt(placeCommandArgs[0]);
  const y = parseInt(placeCommandArgs[1]);
  const facing = placeCommandArgs[2];
  if (robotModel.isValidPosition(x, y)) {
    robotModel.place(x, y, facing);
  } else {
    console.log('Invalid PLACE command.');
  }
}

export const processCommand = (command) => {
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
      robotModel.move();
      break;
    case 'LEFT':
      robotModel.left();
      break;
    case 'RIGHT':
      robotModel.right();
      break;
    case 'REPORT':
      robotModel.report();
      break;
    default:
      console.log('Invalid command.');
      break;
  }
}

export const startRobot = () => {
  console.log(
    'Enter commands for the toy robot (or type "QUIT" to exit).\n' +
      'Commands: PLACE X,Y,FACING | MOVE | LEFT | RIGHT | REPORT\n' +
      'Example: PLACE 0,0,NORTH\n'
  );

  const processInput = () => {
    robotView.getInput((command) => {
      if (command.trim().toUpperCase() === 'QUIT') {
        robotView.closeInput();
      } else {
        processCommand(command);
        processInput();
      }
    });
  }

  processInput();
}
