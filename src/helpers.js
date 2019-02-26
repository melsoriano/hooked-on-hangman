export const letters = 'abcdefghijklmnopqrstuvwxyz';

const words = [
	'javascript',
	'react',
	'angular',
	'docker',
	'node',
	'typescript'
];

export const getWord = () => {
	return words[Math.floor(Math.random() * words.length)];
};
