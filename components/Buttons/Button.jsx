/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled, { css } from 'styled-components';

const defaultBackground = 'palevioletred';
const defaultColor = 'white';

const defaultColors = css`
  background: ${defaultBackground};
  color: ${defaultColor};
`;

const checkForInversion = css`
  background: ${props => props.inverted ? 'transparent' : props.color};
  color: ${props => props.inverted ? props.color : 'white'};
`;

export const Button = styled.button`
/* Adapt the colours based on primary prop */
${props => props.color ? checkForInversion : defaultColors};

height: 4em;
width: 10em;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid ${props => props.color ? props.color : defaultColor};
border-radius: 3px;
outline: none;
transition: 0.3s;
box-shadow: ${props => props.staticShadow ? '2px 8px 16px rgba(0, 0, 0, .5)' : 'none'};

/* Psuedo-classes */
&:hover {
  background: ${props => props.color && !props.inverted ? 'white' : props.color};
  color: ${props => props.color && !props.inverted ? props.color : 'white'};
  box-shadow: ${props => props.shadow || props.staticShadow ? '2px 8px 16px rgba(0, 0, 0, .5)' : 'none'};
  transform: ${props => props.shadow ? 'translateY(-2px)' : 'none'};
}
&:active {
  box-shadow: ${props => props.shadow || props.staticShadow ? '2px 4px 16px rgba(0, 0, 0, .5)' : 'none'};
  transform: translateY(2px);
  transition: 0s;
}
`;
