import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const value = selectExpensesTotal();
  expect(value).toBe(0);
});

test('should correctly add up a single expense', () => {
  const value = selectExpensesTotal([expenses[0]]);
  expect(value).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const value = selectExpensesTotal([expenses[0], expenses[2]]);
  expect(value).toBe(4695);
});
