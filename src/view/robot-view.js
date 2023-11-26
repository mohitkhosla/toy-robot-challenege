import readline from "readline";

/**
 * Creates a NodeJS readline interface to handle command line inputs
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Initializes the readline interface to get user input
 * @param {callback function} command - The callback function to handle user input
 */
export const getInput = (command) => {
  rl.question("> ", command);
};

/**
 * Closes the readline interface, and ends the user input process
 */
export const closeInput = () => {
  rl.close();
};
