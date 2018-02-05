import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({id, description, amount, note, createdAt, dispatch}) => (
  <div>
    <Link to={`/edit/${id}`}> <p>Description: {description}</p> </Link>
    <p>Amount: {numeral(amount/100).format('$0,0.00')} GBP</p>
    {note && <p>Note: {note}</p>}
    <p>Created at: {moment(createdAt).format('MMMM Do, YYYY')}</p>
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

export default ExpenseListItem;
