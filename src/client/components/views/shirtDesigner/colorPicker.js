import React from 'react';
import styled from 'styled-components';
import { Box, ColourBox } from './styles';

const P = styled.p`
  text-transform: uppercase;
`;

export default ({ color }) => (
  <Box mr="20px">
    <P>{color}</P>
    <ColourBox boxColor={color} />
  </Box>
);
