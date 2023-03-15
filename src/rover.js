import { promptUser } from './user-prompts.js';

const answers = await promptUser()

const { gridSize, roverPosition, instructions } = answers

console.log(gridSize, roverPosition, instructions)

function turnLeft(orientation) {
  switch (orientation) {
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

function turnRight(orientation) {
  switch (orientation) {
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

function turnMiddle(orientation) {
  switch (orientation) {
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

function moveRover(roverPosition, instructions) {
  for (const instruction of instructions) {

    const isLeftInstruction = instruction === 'L'
    const isRightInstruction = instruction === 'R'
    const isMiddleInstruction = instruction === 'M'

    if (isLeftInstruction) {
      turnLeft(roverPosition.orientation)
    } else if (isRightInstruction) {
      turnRight(roverPosition.orientation)
    }
    else if (isMiddleInstruction) {
      turnMiddle(roverPosition.orientation)
    }
  }
}


moveRover(roverPosition, instructions);
console.log(`A posição final da sonda é roverPosition.x, roverPosition.y, roverPosition.orientation`);
