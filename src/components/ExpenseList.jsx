import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


//presentational component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
      {props.expenses.map((expense, iterator) => (
        <div key={iterator}>
          {/* <ExpenseListItem expense={expense} /> */}
          <ExpenseListItem {...expense} />
        </div>

      ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);
