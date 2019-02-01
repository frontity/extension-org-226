import ValentiReview from '../../components/ValentiReview';

export default {
  test: ({ component, props }) =>
    component === 'div' &&
    !!props.className &&
    props.className.includes('cb-review-box'),
  process: () => {
    const props = {
      title: 'Avianca Colombia: Opiniones y valoración',
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
      review: {
        label: 'Puntación de los lectores ',
        votes: '0 Votos',
        stars: '100%',
      },
    };

    return { component: ValentiReview, props };
  },
};
