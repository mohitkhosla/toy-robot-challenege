import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const getInput = (command) => {
  rl.question('> ', command);
}

export const closeInput = () => {
  rl.close();
}
