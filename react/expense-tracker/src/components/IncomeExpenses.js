import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts_pos = transactions.map(transaction => transaction.amount > 0 ? transaction.amount : 0);
  const total_pos = amounts_pos.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const amounts_neg = transactions.map(transaction => transaction.amount < 0 ? transaction.amount : 0);
  const total_neg = amounts_neg.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">{total_pos}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">{Math.abs(total_neg)}</p>
      </div>
    </div>
  )
}
