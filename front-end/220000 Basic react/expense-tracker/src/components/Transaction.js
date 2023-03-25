import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'; 

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  
  const prefix = transaction.amount > 0 ? '$' : '-$';

  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text} <span>{prefix}{Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}
