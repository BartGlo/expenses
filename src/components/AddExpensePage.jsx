import React, {Component} from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';

const AddExpensePage = ({dispatch, history}) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={(data)=> {
      dispatch(addExpense(data));
      history.push('/');
    }
  }
/>
</div>
);
export default connect()(AddExpensePage);
