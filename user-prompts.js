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
  })
}
