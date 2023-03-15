import { promptUser } from './promptUser.js';

const answers = await promptUser();

const { gridSize, roverPositions, roverInstructions } = answers;

function turnLeft(roverPosition) {
  switch (roverPosition.orientation) {
    case 'N':
      roverPosition.orientation = 'W';
      break;
    case 'W':
      roverPosition.orientation = 'S';
      break;
    case 'S':
      roverPosition.orientation = 'E';
      break;
    case 'E':
      roverPosition.orientation = 'N';
      break;
  }
}

function turnRight(roverPosition) {
  switch (roverPosition.orientation) {
    case 'N':
      roverPosition.orientation = 'E';
      break;
    case 'E':
      roverPosition.orientation = 'S';
      break;
    case 'S':
      roverPosition.orientation = 'W';
      break;
    case 'W':
      roverPosition.orientation = 'N';
      break;
  }
}

function moveRover(roverPosition, instructions) {
  for (const instruction of instructions) {
    const isLeftInstruction = instruction === 'L';
    const isRightInstruction = instruction === 'R';
    const isMiddleInstruction = instruction === 'M';

    if (isLeftInstruction) {
      turnLeft(roverPosition);
    } else if (isRightInstruction) {
      turnRight(roverPosition);
    } else if (isMiddleInstruction) {
      switch (roverPosition.orientation) {
        case 'N':
          if (roverPosition.y < gridSize.y) {
            roverPosition.y++;
          }
          break;
        case 'S':
          if (roverPosition.y > 0) {
            roverPosition.y--;
          }
          break;
        case 'E':
          if (roverPosition.x < gridSize.x) {
            roverPosition.x++;
          }
          break;
        case 'W':
          if (roverPosition.x > 0) {
            roverPosition.x--;
          }
          break;
      }
    }
  }
}

roverPositions.forEach((rover, i) => {
  moveRover(rover, roverInstructions[i]);
  console.log(rover.x, rover.y, rover.orientation);
});
