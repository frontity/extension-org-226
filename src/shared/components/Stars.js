import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Star from './Star';

const Stars = ({ className, color, stars }) => (
  <Container className={className} color={color}>
    {Array(5).fill(<StyledStar />)}
    <Overlay stars={stars} />
  </Container>
);

Stars.propTypes = {
  className: PropTypes.string,
  stars: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Stars.defaultProps = {
  className: '',
  color: '',
};

export default Stars;

const Container = styled.div`
  ${({ color }) => `color: ${color};`}
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  svg:not(:first-child) {
    margin-left: 5px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: ${({ stars }) => stars};
  opacity: 0.75;
  background-color: #f2f2f2;
`;

const StyledStar = styled(Star)`
  width: 20px;
  height: 20px;
`;
