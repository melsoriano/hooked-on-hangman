import React, { useState, useRef } from 'react';
import './App.css';
import { letters, getWord } from './helpers';
import {
	Container,
	LettersButton,
	HangZone,
	HangingMan,
	Frame,
	Swingers,
	Rope,
	Head,
	Body,
	Arms,
	Legs,
	GuessWord,
	LetterOptions,
	GameMenu,
	GameButton
} from './App.sc';

const App = () => {
	const [fails, setFails] = useState([]);
	const [successes, setSuccesses] = useState([]);
	const [word, setWord] = useState(getWord());
	const [startMenu, setStartMenu] = useState(true);
	const threshold = useRef(5);

	const selectLetter = letter => {
		if (word.includes(letter)) {
			const count = word.match(new RegExp(letter, 'g')).length;
			const matches = new Array(count).fill().map(() => letter);
			setSuccesses([...successes, ...matches]);
		} else {
			setFails([...fails, letter]);
		}
	};

	const newGame = () => {
		setWord(getWord());
		setFails([]);
		setSuccesses([]);
	};

	const menu = () => {
		setStartMenu(false);
	};

	return (
		<Container className="container">
			<HangZone>
				<HangingMan preserveAspectRatio="xMinYMin" viewBox="0 0 200 200">
					<Frame />
					<Swingers animate={fails.length > 1}>
						{fails.length >= 1 && <Rope />}
						{fails.length >= 2 && <Head />}
						{fails.length >= 3 && <Body />}
						{fails.length >= 4 && <Arms />}
						{fails.length >= 5 && <Legs />}
					</Swingers>
				</HangingMan>
			</HangZone>

			{!startMenu &&
				word &&
				word.split('').map((letter, i) => {
					return (
						<GuessWord
							className="letters"
							key={`letters--${i}`}
							underline={true}
							fade={!successes.includes(letter)}>
							{(successes.includes(letter) ||
								fails.length === threshold.current) &&
								letter}
						</GuessWord>
					);
				})}

			{!startMenu &&
				word &&
				fails.length !== threshold.current &&
				successes.length !== word.length && (
					<LetterOptions className="options">
						{letters.split('').map(letter => {
							return (
								<LettersButton
									disabled={
										successes.includes(letter) || fails.includes(letter)
									}
									key={`key--${letter}`}
									onClick={() => selectLetter(letter)}>
									{letter}
								</LettersButton>
							);
						})}
					</LetterOptions>
				)}

			{(fails.length === threshold.current ||
				successes.length === word.length) &&
				!startMenu && (
					<GameMenu>
						<h1>
							{`${
								successes.length === word.length
									? 'YAY, YOU WIN!'
									: 'BOO, YOU LOSE!'
							}`}
						</h1>
						<GameButton onClick={newGame}>New Game</GameButton>
					</GameMenu>
				)}

			{startMenu && (
				<GameMenu>
					<h2>GUESS THE WEB DEV WORD!</h2>
					<GameButton onClick={menu}>START</GameButton>
				</GameMenu>
			)}
		</Container>
	);
};

export default App;
