import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';

const ScoreBox = ({ label, score, stars, color }) => (
  <Box color={color}>
    <Score>{score}</Score>
    <Label>{label}</Label>
    <StyledStars color={color} stars={stars} />
  </Box>
);

ScoreBox.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ScoreBox.defaultProps = {
  color: '#161616',
};

export default ScoreBox;

const Box = styled.div`
  border: 3px solid;
  border-color: ${({ color }) => color};
  width: 130px;
  min-height: 110px;
  font-weight: 700;
  margin: 0 auto;
`;

const Score = styled.div`
  padding-top: 15px;
  font-size: 50px;
  line-height: 1;
  text-align: center;
`;

const Label = styled.div`
  padding-top: 15px;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1;
  text-align: center;
`;

const StyledStars = styled(Stars)`
  padding: 10px 0;
`;
