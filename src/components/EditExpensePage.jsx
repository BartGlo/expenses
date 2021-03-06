import React, {Component} from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id})
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense}
          onSubmit = {this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) =>  expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, {
      description:expense.description,
      amount: expense.amount,
      createdAt: expense.createdAt,
      note: expense.note
    })),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
