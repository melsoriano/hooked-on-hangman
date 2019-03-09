import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { getData, letters } from '../helpers';
import {
  Container,
  LettersButton,
  HangZone,
  HangingMan,
  Hint,
  Frame,
  Swingers,
  Rope,
  Head,
  Body,
  Arms,
  Legs,
  GuessWord,
  LetterOptions,
  GameButton,
  GameMenu,
  GuessWordContainer,
  Logo
} from './App.sc';

const App = () => {
  const [fails, setFails] = useState([]);
  const [successes, setSuccesses] = useState([]);
  const [data, setData] = useState(getData());
  const [prev, setPrev] = useState('');
  const [startMenu, setStartMenu] = useState(true);
  const threshold = useRef(5);

  const selectLetter = letter => {
    if (data.word.includes(letter)) {
      const count = data.word.match(new RegExp(letter, 'g')).length;
      const matches = new Array(count).fill().map(() => letter);
      setSuccesses([...successes, ...matches]);
    } else {
      setFails([...fails, letter]);
    }
  };

  const newGame = () => {
    setData(getData());
    // set previous word variable
    setPrev(data.word);
    setFails([]);
    setSuccesses([]);
  };

  const menu = () => {
    setStartMenu(false);
  };

  useEffect(() => {
    onkeypress = e => {
      if (
        !startMenu &&
        !successes.includes(e.key) &&
        !fails.includes(e.key) &&
        successes.length !== data.word.length &&
        fails.length !== threshold.current
      ) {
        selectLetter(e.key);
      } else {
        return;
      }
    };
  });

  return (
    <Container className="container">
      {startMenu && (
        <GameMenu>
          <Logo>hooked on hangman</Logo>
          <h3>How to play:</h3>
          <p>
            Guess the web dev word! You can use your keyboard to type or select
            a letter from the onscreen keyboard.
          </p>
          <GameButton onClick={menu}>PLAY</GameButton>
        </GameMenu>
      )}

      {!startMenu && (
        <HangZone>
          <HangingMan viewBox="0 0 200 200">
            <Frame d="M 5 195 L 5 5 L 100 5 M 50 5 L 5 50" />
            <Swingers animate={fails.length > 1}>
              {fails.length >= 1 && <Rope d="M 100 5 L 100 30" />}
              {fails.length >= 2 && <Head />}
              {fails.length >= 3 && <Body d="M 100 70 L 100 120" />}
              {fails.length >= 4 && <Arms d="M 90 110 L 100 80 L 110 110" />}
              {fails.length >= 5 && <Legs d="M 96 140 L 100 120 L 104 140" />}
            </Swingers>
          </HangingMan>
        </HangZone>
      )}
      {/* catch repeated words */}
      {data.word === prev && newGame()}
      <GuessWordContainer className="word-container">
        {!startMenu &&
          data.word &&
          data.word.split('').map((letter, i) => {
            return (
              <GuessWord
                className="letters"
                key={`letters--${i}`}
                underline={true}
                fade={!successes.includes(letter)}>
                {' '}
                {(successes.includes(letter) ||
                  fails.length === threshold.current) &&
                  letter}{' '}
              </GuessWord>
            );
          })}
      </GuessWordContainer>
      <Hint>{!startMenu && data.hint}</Hint>
      {!startMenu &&
        data.word &&
        fails.length !== threshold.current &&
        successes.length !== data.word.length && (
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
            <br />
          </LetterOptions>
        )}

      {!startMenu &&
        (fails.length !== threshold.current &&
          successes.length !== data.word.length)}
      {(fails.length === threshold.current ||
        successes.length === data.word.length) &&
        !startMenu && (
          <GameMenu>
            <h1>
              {`${
                successes.length === data.word.length
                  ? 'YAY, YOU WIN!'
                  : 'BOO, YOU LOSE!'
              }`}
            </h1>
            <GameButton onClick={newGame}>New Game</GameButton>
          </GameMenu>
        )}
    </Container>
  );
};

export default App;
