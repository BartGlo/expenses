import React, {Component} from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');
  return (
    <div>
      {
        expenseCount !== 0 &&
        `Viewing ${expenseCount} ${expenseWord} totaling ${formattedExpensesTotal}`
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: expensesTotal(selectExpenses(state.expenses, state.filters))
})

export default connect(mapStateToProps)(ExpensesSummary);
