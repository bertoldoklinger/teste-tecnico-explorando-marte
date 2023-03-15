import readline from 'readline';

const promptUser = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const gridSize = await new Promise((resolve) => {
    rl.question('Qual o tamanho da malha? ', (answer) => {
      resolve(answer.replace(/ /g, '').split(''));
    });
  });

  const initialPosition = await new Promise((resolve) => {
    rl.question('Qual a posição inicial do Rover? ', (answer) => {
      resolve(answer.replace(/ /g, '').split(''));
    });
  });

  const instructions = await new Promise((resolve) => {
    rl.question('Quais as instruções de movimento? ', (answer) => {
      resolve(answer.replace(/ /g, '').split(''));
    });
  });

  rl.close();

  return [gridSize, initialPosition, instructions];
};

export default promptUser;