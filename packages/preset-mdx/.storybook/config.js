import React from 'react';
import { configure } from '@storybook/react';

const req = require.context('./', true, /\.stories\.mdx$/);

function loadStories() {
  require('./index.mdx');
  req.keys().forEach(examplePath => req(examplePath));
}

configure(loadStories, module);