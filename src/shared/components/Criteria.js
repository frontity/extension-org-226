import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';

const Criteria = ({ label, stars }) => (
  <Container>
    <Label>{label}</Label>
    <StyledStars stars={stars} />
  </Container>
);

Criteria.propTypes = {
  label: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};

export default Criteria;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  margin-bottom: 25px;
`;

const StyledStars = styled(Stars)`
  color: #f28a1b;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
`;
