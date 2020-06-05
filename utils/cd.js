'use strict';

const shell = require('shelljs');

const cd = (directory) => shell.cd(directory)

module.exports = cd;
