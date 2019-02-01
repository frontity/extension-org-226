import ValentiReview from '../../components/ValentiReview';

const findElement = (element, className) => {
  const { props, children } = element;
  if (props && props.className && props.className.includes(className)) {
    return element;
  }
  return children && children.find(e => findElement(e, className));
};

const getTitle = element => {
  const titleElement = findElement(element, 'cb-review-title');
  let title = '';

  if (titleElement) {
    [{ content: title }] = titleElement.children;
  }

  return title;
};

export default {
  test: ({ component, props }) =>
    component === 'div' &&
    !!props.className &&
    props.className.includes('cb-review-box'),
  process: element => {
    const props = {
      title: getTitle(element),
      summary: {
        label: 'Nota Final',
        score: '8.7',
        stars: '13%',
      },
      criteria: [
        { label: 'Precios', stars: '12%' },
        { label: 'Métodos de pago', stars: '12%' },
        { label: 'Diseño y usabilidad', stars: '28%' },
        { label: 'Información al cliente', stars: '7%' },
        { label: 'Servicios', stars: '6%' },
      ],
      userRating: {
        label: 'Puntación de los lectores ',
        votes: '0 Votos',
        stars: '100%',
      },
    };

    return { component: ValentiReview, props };
  },
};
