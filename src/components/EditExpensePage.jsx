import React, {Component} from 'react';
import { connect } from 'react-redux';
import selectExpense from '../selectors/expenses';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage = (props) => (
  <div>
    <ExpenseForm expense={props.expense}
      onSubmit = {(expense) => {
        console.log(expense);
        props.dispatch(editExpense(props.expense.id, {
          description:expense.description,
          amount: expense.amount,
          createdAt: expense.createdAt,
          note: expense.note
        }));
        props.history.push('/');
      }
      }
    />
    <button onClick={() => {
      props.dispatch(removeExpense({id: props.expense.id}))
      props.history.push('/');
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) =>  expense.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);
