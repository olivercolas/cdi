'use strict';

const fs = require('fs');

const ls = (directory) =>
  new Promise((resolve, reject) => {
    const files = fs
      .readdirSync(directory, { withFileTypes: true })
      .filter((dir) => dir.isDirectory())
      .map((dir) => dir.name);
    files.unshift('../');
    resolve(files);
  });

module.exports = ls;
