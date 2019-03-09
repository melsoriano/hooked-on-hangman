import React, { useState, useRef } from 'react';
import './App.css';
import { getData, letters } from './helpers';
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
  GuessWordContainer
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
      {/* bind user key interactions as inputs */}
      {
        (onkeypress = e => {
          if (!successes.includes(e.key)) {
            selectLetter(e.key);
          }
        })
      }
      {!startMenu &&
        (fails.length !== threshold.current &&
          successes.length !== data.word.length) && (
          <Hint>*Try it with your keyboard!</Hint>
        )}
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
