import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({id, description, amount, note, createdAt, dispatch}) => (
  <div>
    <p>Description: {description}</p>
    <p>Amount: {amount / 100} GBP</p>
    {note && <p>Note: {note}</p>}
    <p>Created at: {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}))}}>Remove</button>
  </div>

);

// const ExpenseListItem = (props) => {
//   const {description, amount, note, createdAt} = props.expense;
//   return (
//     <div>
//       <p>Description: {description}</p>
//       <p>Amount: {amount / 100} GBP</p>
//       {note && <p>Note: {note}</p>}
//       <p>Created at: {createdAt}</p>
//     </div>
//   );
// }

export default connect()(ExpenseListItem);
