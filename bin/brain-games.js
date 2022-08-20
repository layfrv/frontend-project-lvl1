#!/usr/bin/env node
// eslint-disable-next-line import/extensions, import/named
import userName from '../src/cli.js';

// eslint-disable-next-line no-console
const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

greeting();

userName();
