import React from 'react'
import styled, { css } from 'styled-components';

const storybookContainer = css`
  height: 100vh;
`;


export default styled.div`
  ${props => props.storybook ? storybookContainer : 'height: 100%'};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
