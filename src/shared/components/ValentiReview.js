import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ScoreBox from './ScoreBox';
import Criteria from './Criteria';
import UsersReview from './UsersReview';

const ValentiReview = ({ title, summary, criteria, review }) => (
  <Container className="ignored-by-content">
    <Area>
      <Title>{title}</Title>
      <ScoreBox {...summary} />
    </Area>
    <Area>
      {criteria.map(c => (
        <Criteria key={c.label} {...c} />
      ))}
    </Area>
    <Area>
      <UsersReview {...review} />
    </Area>
  </Container>
);

ValentiReview.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.shape({
    label: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
  }).isRequired,
  criteria: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      stars: PropTypes.string.isRequired,
    }),
  ).isRequired,
  review: PropTypes.shape({
    label: PropTypes.string.isRequired,
    votes: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
  }).isRequired,
};

export default ValentiReview;

const Container = styled.div`
  margin: 20px 0;
`;

const Area = styled.div`
  color: #161616;
  background: #f2f2f2;
  position: relative;
  padding: 20px 15px;
  &:not(:first-child) {
    margin-top: 5px;
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
