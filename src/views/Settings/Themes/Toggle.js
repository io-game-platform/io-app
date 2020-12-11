import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as SunIcon } from './icons/sun.svg';
import { ReactComponent as MoonIcon } from './icons/moon.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;
  outline: none;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;