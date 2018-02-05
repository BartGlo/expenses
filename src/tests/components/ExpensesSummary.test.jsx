import React from 'react';
import selectExpensesTotal from '../../selectors/expenses-total';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';



test('should render properly with 1 expense', () => {
  const props = {
    expenseCount: 1,
    expensesTotal: expenses[0].amount
  }
  const wrapper = shallow(<ExpensesSummary {...props}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render properly with multiple expenses', () => {
  const props = {
    expenseCount: expenses.length,
    expensesTotal: selectExpensesTotal(expenses)
  }
  const wrapper = shallow(<ExpensesSummary {...props} />);
  expect(wrapper).toMatchSnapshot();
});
