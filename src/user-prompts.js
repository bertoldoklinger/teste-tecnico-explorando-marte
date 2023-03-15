import readline from 'readline';

const promptUser = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const gridSize = await new Promise((resolve) => {
    rl.question('Qual o tamanho da malha? ', (answer) => {
      const gridAnswer = answer.replace(/ /g, '').split('')
      const [x, y] = gridAnswer
      const gridSize = { x, y }
      resolve(gridSize)
    });
  });

  const roverPosition = await new Promise((resolve) => {
    rl.question('Qual a posição inicial do Rover? ', (answer) => {
      const initialPositionAnswer = answer.replace(/ /g, '').split('')
      const [x, y, orientation] = initialPositionAnswer
      const roverPosition = { x, y, orientation }
      resolve(roverPosition);
    });
  });

  const instructions = await new Promise((resolve) => {
    rl.question('Quais as instruções de movimento? ', (answer) => {
      resolve(answer);
    });
  });
  rl.close();
  const answers = { gridSize, roverPosition, instructions }

  return answers
}

export { promptUser };

