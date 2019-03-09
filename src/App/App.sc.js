import styled, { keyframes } from 'styled-components';

const swing = keyframes`
  0%,
  50%,
  100% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-1deg);
  }
  75% {
    transform: rotate(1deg);
  }
`;

const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const enter = keyframes`
  from {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

export const LettersButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 1.25rem;
  color: #fff;
  margin: 3px;
  border: 1px solid #fff;
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    background: transparent;
    opacity: 0.2;
  }
`;

export const GameButton = styled(LettersButton)`
  padding: 0 16px;
  height: 44px;
`;

export const GuessWordContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin: auto;
`;

export const GuessWord = styled.div`
  place-items: center;
  width: 2rem;
  font-size: 2rem;
  height: 3rem;
  text-align: center;
  margin: 10px;
  opacity: ${props => (props.fade ? 0.3 : 1)};
  transition: opacity 0.25s ease;

  color: #fff;
  ${props => props && props.underline && `border-bottom: 5px solid #fff;`};
  @media (max-width: 414px) {
    width: 1.3rem;
  }
`;

export const Hint = styled.div`
  font-size: 1.4rem;
  color: #fff;
  animation: ${enter} 0.25s 0.25s ease both;
  text-align: center;
  padding: 20px;
`;

export const LetterOptions = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(9, 44px);
  grid-template-rows: repeat(3, 44px);
  grid-column: 1 / -1;
  align-content: center;
  justify-content: center;
`;

export const GameMenu = styled.div`
  color: #fff;
  animation: ${enter} 0.25s 0.25s ease both;
  text-align: center;
  width: 24rem;
  margin: auto;
`;

export const HangingMan = styled.svg`
  height: 180px;
  @media (min-width: 375px) and (min-height: 660px) {
    height: 320px;
  }
  path,
  circle {
    animation-fill-mode: forwards;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 5px;
    fill: none;
    stroke: #fff;
  }
`;

export const HangZone = styled.div`
  text-align: center;
`;

export const Swingers = styled.g`
  transform-origin: 50% 0;
  animation: ${swing} 3s infinite linear paused;
  ${props =>
    props.animate &&
    `
    animation-play-state: running;
  `};
`;

export const Frame = styled.path`
  stroke-dashoffset: 400;
  stroke-dasharray: 400;
  animation: ${draw} 2s 1s ease;
`;

export const Rope = styled.path`
  stroke-dashoffset: 100;
  stroke-dasharray: 100;
  animation: ${draw} 1s ease;
`;

export const Head = styled.circle`
  cx: 100;
  cy: 50;
  r: 20;
  stroke-dashoffset: 150;
  stroke-dasharray: 150;
  animation: ${draw} 1s ease;
`;

export const Body = styled.path`
  stroke-dashoffset: 200;
  stroke-dasharray: 200;
  animation: ${draw} 1s ease;
`;

export const Arms = styled.path`
  stroke-dashoffset: 300;
  stroke-dasharray: 300;
  animation: ${draw} 2s ease;
`;

export const Legs = styled.path`
  stroke-dashoffset: 300;
  stroke-dasharray: 300;
  animation: ${draw} 2s ease;
`;

const bounce = keyframes`
0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
`;

export const Logo = styled.div`
  font-size: 3rem;
  color: #fff;
  animation: ${bounce} 3s both infinite;
  animation-direction: alternate;
`;
