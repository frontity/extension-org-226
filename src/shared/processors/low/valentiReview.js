import ValentiReview from '../../components/ValentiReview';

const hasClass = (e, c) => {
  const { props = {} } = e;
  const { className } = props;
  return !!(className && className.includes(c));
};

const find = (element, className) => {
  if (hasClass(element, className)) return element;
  return (
    element.children &&
    element.children.reduce((found, e) => found || find(e, className), null)
  );
};

export const getTitle = e => find(e, 'cb-review-title').children[0].content;
export const getLabel = e => e.children[0].content;
export const getStars = e => e.children[0].props.style.match(/(\d+%)/)[1];

export const getSummary = e => {
  const [scoreElement, labelElement, starsElement] = find(
    e,
    'cb-score-box',
  ).children;
  return {
    score: scoreElement.children[0].content,
    label: getLabel(labelElement),
    stars: getStars(starsElement),
  };
};

export const getCriteria = e => {
  const { children: allCriteria } = find(e, 'cb-criteria-area');
  return allCriteria.map(({ children }) => {
    const [labelElement, starsElement] = children;
    return {
      label: getLabel(labelElement),
      stars: getStars(starsElement),
    };
  });
};

export const getUserRating = e => {
  const [labelElement, starsElement] = find(
    e,
    'cb-user-rating',
  ).children[0].children;
  const votesElement = labelElement.children[1];
  return {
    label: getLabel(labelElement),
    votes: votesElement.children[0].content,
    stars: getStars(starsElement),
  };
};

export default {
  test: ({ component, props }) =>
    component === 'div' &&
    !!props.className &&
    props.className.includes('cb-review-box'),
  process: element => {
    const props = {
      title: getTitle(element),
      summary: getSummary(element),
      criteria: getCriteria(element),
      userRating: getUserRating(element),
    };

    return { component: ValentiReview, props };
  },
};
