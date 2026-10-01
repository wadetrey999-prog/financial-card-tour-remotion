import React from 'react';
import {config as c, money} from './config';

export const IncomeCard:React.FC = () => <div className="card income">
  <header><b>Top Income Sources</b><span>View All ›</span></header>
  {c.income.map(row=><div className="income-row" key={row.name}>
    <div className="row"><span>{row.name}</span><strong>+{money(row.amount)}</strong></div>
    <div className="track"><div style={{width:row.ratio*100+'%'}}/></div>
    <small>Total received</small>
  </div>)}
</div>;

export const InvoiceCard:React.FC = () => {const d=c.invoice;return <div className="card invoice">
  <header><b>{d.brand}</b><div className="invoice-id"><b>INVOICE</b><small>{d.number} <em>• {d.status}</em></small></div></header>
  <div className="addresses"><div><span>Bill to</span><b>{d.client}</b><span>{d.clientCity}</span><span>{d.clientEmail}</span></div><div><span>From</span><b>{d.sender}</b><span>{d.senderCity}</span><span>{d.senderEmail}</span></div></div>
  <div className="dates"><div>Issue date<b>{d.issue}</b></div><div>Due date<b>{d.due}</b></div></div>
  <div className="invoice-table"><div className="table-head"><span>Description</span><span>Qty</span><span>Rate</span><span>Amount</span></div><div className="table-body"><span>{d.item}</span><span>1</span><span>{money(d.total)}</span><span>{money(d.total)}</span></div></div>
  <div className="totals"><div><span>Subtotal</span><span>{money(d.total)}</span></div><div><span>Tax (0%)</span><span>$0</span></div><div className="total"><b>Total</b><b>{money(d.total)}</b></div></div>
</div>};

export const TransactionsCard:React.FC = () => <div className="card transactions">
  <header><b>Recent Transactions</b><span>View All ›</span></header>
  {c.transactions.map(row=><div className="transaction" key={row.name}><div className={'icon '+(row.amount<0?'pink':'')}>{row.icon}</div><div className="transaction-label"><div>{row.name}</div><small>{row.category}</small></div><strong style={{color:row.amount<0?c.colors.negative:c.colors.ink}}>{row.amount<0?'−':'+'}{money(row.amount)}</strong></div>)}
</div>;

export const ExpenseCard:React.FC = () => <div className="card expense"><div className="expense-heading">Expense breakdown</div><div className="donut"><div><small>Total expenses</small><b>$13,271</b></div></div><div className="legend">{c.expenses.map(d=><div key={d.name}><i style={{background:d.color}}/><span>{d.name}</span><b>{money(d.value)}</b></div>)}</div></div>;
export const CategoryCard:React.FC = () => <div className="card category"><div>EXPENSE CATEGORIES</div><div className="category-bars"><i/><i/><i/></div><small><span>🔵</span> Software 50% <span>🟢</span> Tools 30%</small></div>;
