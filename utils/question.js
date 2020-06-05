'use strict';

const inquirer = require('inquirer');

class Question {
  constructor({ type = 'list', name = 'answer', message, choices }) {
    this.type = type;
    this.name = name;
    this.message = message;
    this.choices = choices;
  }

  async ask() {
    try {
      return await inquirer.prompt({
        type: this.type,
        name: this.name,
        message: this.message,
        choices: this.choices,
      });
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}

module.exports = Question