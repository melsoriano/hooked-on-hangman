export const letters = 'abcdefghijklmnopqrstuvwxyz';

export const data = [
  {
    word: 'javascript',
    hint: 'the language of the web'
  },
  {
    word: 'react',
    hint:
      'JavaScript frontend library used for building single page applications'
  },
  {
    word: 'angular',
    hint: 'a front end framework with two way data binding'
  },
  {
    word: 'docker',
    hint: 'used to containerize applications'
  },
  {
    word: 'node',
    hint: 'a javascript runtime environment'
  },
  {
    word: 'typescript',
    hint: 'like javascript, but strongly typed'
  },
  {
    word: 'cache',
    hint:
      'the storage of certain elements to help with faster load times from repeat website visitors.'
  },
  {
    word: 'domain',
    hint: 'address for a website as entered into the browser.'
  },
  {
    word: 'firewall',
    hint: 'system to protect a secure network from an unsecure network.'
  },
  {
    word: 'framework',
    hint: 'collective suite of programs used in development.'
  },
  {
    word: 'wireframe',
    hint: 'bare bones structure of a website or application'
  },
  {
    word: 'debugging',
    hint:
      'the process of identifying and dealing an error that prevents a website or app from running as it should'
  },
  {
    word: 'json',
    hint:
      'a file format that uses human-readable text to transmit data objects consisting of key-value pairs'
  },
  {
    word: 'redux',
    hint:
      'single source of truth used for managing the state of your application.'
  }
];

export const getData = () => {
  return data[Math.floor(Math.random() * data.length)];
};
