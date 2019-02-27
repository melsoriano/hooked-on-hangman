export const letters = 'abcdefghijklmnopqrstuvwxyz';

export const data = [
	{
		word: 'javascript',
		hint: 'the language of the web'
	},
	{
		word: 'react',
		hint: 'a front end framework known for using state'
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
	}
];

export const getData = () => {
	return data[Math.floor(Math.random() * data.length)]
};

