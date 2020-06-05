'use strict';

const chalk = require('chalk');
const nodeCleanup = require('node-cleanup');
const clearConsole = require('../utils/clearConsole');
const startMessage = require('../utils/startMessage');
const ls = require('../utils/ls');
const cd = require('../utils/cd');
const Question = require('../utils/question');

const { log } = console;
let count = 0;
let cwd = process.cwd()

const run = async (currentDirectory) => {
  log(currentDirectory);

  if (count === 0) {
    clearConsole();
    log(startMessage);
  }

  const directoryChoices = await ls(currentDirectory);
  const message = count === 0 ? 'Select a directory' : 'Select another directory';
  const question = new Question({ message, choices: directoryChoices });
  const { answer } = await question.ask();
  cd(answer);
  
  cwd = process.cwd()

  count++;
  run(cwd);
};

nodeCleanup(function (exitCode, signal) {
    clearConsole()
    console.log('You ended up at: ')
    console.log(chalk.yellow(cwd))
});

run(cwd);
