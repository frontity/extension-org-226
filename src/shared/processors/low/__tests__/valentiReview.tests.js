import Component from '../../../components/ValentiReview';
import main, {
  getTitle,
  getSummary,
  getCriteria,
  getUserRating,
} from '../valentiReview';
import data from './data/valentiReview.json';

describe('Extension Organization 226 › Shared › Processors › low › valentiReview', () => {
  test('extracts title ', () => {
    expect(getTitle(data)).toMatchSnapshot();
  });
  test('extracts summary data ', () => {
    expect(getSummary(data)).toMatchSnapshot();
  });
  test('extracts all criteria ', () => {
    expect(getCriteria(data)).toMatchSnapshot();
  });
  test('extracts user rating', () => {
    expect(getUserRating(data)).toMatchSnapshot();
  });
  test('processor works as expected', () => {
    const { test: t, process: p } = main;
    expect(t(data)).toBeTruthy();
    const processed = p(data);
    expect(processed.component).toBe(Component);
    expect(processed).toMatchSnapshot();
  });
});
