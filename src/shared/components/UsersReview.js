import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stars from './Stars';

const UsersReview = ({ label, votes, stars }) => (
  <Container>
    <Label>
      {label}
      <Votes>{votes}</Votes>
    </Label>
    <StyledStars stars={stars} />
  </Container>
);

UsersReview.propTypes = {
  label: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
  stars: PropTypes.string.isRequired,
};

export default UsersReview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledStars = styled(Stars)`
  color: #f28a1b;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 27px;
`;

const Votes = styled.span`
  color: #808080;
`;
