import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper, id;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  id = expenses[1].id;
  wrapper = shallow(<EditExpensePage expense={expenses[1]} editExpense={editExpense} removeExpense={removeExpense} history={history} />);
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle editExpense', () => {
  const changed = {
    amount: 119500,
    createdAt: -345600000,
    description: 'Rent',
    note: ''
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(id, expenses[1]);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id});
});
