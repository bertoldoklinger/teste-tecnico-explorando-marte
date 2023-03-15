import readline from 'readline';

const promptUser = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const gridSize = await new Promise((resolve) => {
    rl.question('Qual o tamanho da malha? ', (answer) => {
      if (!answer) {
        throw new Error('Digite um tamanho válido');
      }
      const gridAnswer = answer.replace(/ /g, '').split('')
      const [x, y] = gridAnswer
      const gridSize = { x, y }
      resolve(gridSize)
    });
  });

  const roverPositions = [];
  const roverInstructions = [];

  while (true) {
    const roverPosition = await new Promise((resolve) => {
      rl.question('Qual a posição inicial do Rover? ', (answer) => {
        if (!answer) {
          throw new Error('Digite uma posição válida');
        }
        const initialPositionAnswer = answer.replace(/ /g, '').toUpperCase().split('')
        const [x, y, orientation] = initialPositionAnswer
        const roverPosition = { x, y, orientation }
        resolve(roverPosition);
      });
    });

    const instructions = await new Promise((resolve) => {
      rl.question('Quais as instruções de movimento? ', (answer) => {
        if (!answer) {
          throw new Error('Digite uma instrução válida');
        }
        resolve(answer.toUpperCase());
      });
    });

    roverPositions.push(roverPosition);
    roverInstructions.push(instructions);

    const moreRovers = await new Promise((resolve) => {
      rl.question('Adicionar mais uma posição e instruções do Rover? (s/n) ', (answer) => {
        resolve(answer.toLowerCase() === 's');
      });
    });

    if (!moreRovers) {
      break;
    }
  }
  rl.close();

  const answers = { gridSize, roverPositions, roverInstructions };
  return answers;
}

export { promptUser };

