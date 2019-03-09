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
  margin: auto;
`;

export const LettersButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 1.25rem;
  color: #fff;
  border: 1px solid #fff;
  margin: 3px;

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
`;

export const HangingMan = styled.svg`
  height: 320px;
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
  ${props => props.animate && `animation-play-state: running;`};
`;

export const Frame = styled.path`
  d: path('M 5 195 L 5 5 L 100 5 M 50 5 L 5 50');
  stroke-dashoffset: 400;
  stroke-dasharray: 400;
  animation: ${draw} 2s 1s ease;
`;

export const Rope = styled.path`
  d: path('M 100 5 L 100 30');
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
  d: path('M 100 70 L 100 120');
  stroke-dashoffset: 200;
  stroke-dasharray: 200;
  animation: ${draw} 1s ease;
`;

export const Arms = styled.path`
  d: path('M 90 110 L 100 80 L 110 110');
  stroke-dashoffset: 300;
  stroke-dasharray: 300;
  animation: ${draw} 2s ease;
`;

export const Legs = styled.path`
  d: path('M 96 140 L 100 120 L 104 140');
  stroke-dashoffset: 300;
  stroke-dasharray: 300;
  animation: ${draw} 2s ease;
`;
