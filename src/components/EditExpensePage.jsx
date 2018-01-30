import React, {Component} from 'react';

const EditExpensePage = (props) => (
  <div>
    {console.log(props)}
    Editing the expense with id of {props.match.params.id}
  </div>
);
export default EditExpensePage;
