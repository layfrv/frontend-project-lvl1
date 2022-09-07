#!/usr/bin/env node
import userName from '../src/cli.js';

// eslint-disable-next-line no-console
const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

greeting();

userName();
