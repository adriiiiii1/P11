import React from 'react';
import Transaction from '../Transaction/Transaction';
import './TransactionItem.css';

function TransactionItem() {
    const transactions = [
        {
            title: `Argent Bank Checking (x8349)`,
            amount: `$2,082.79`,
            description: `Available Balance`,
        },
        {
            title: `Argent Bank Savings (x6712)`,
            amount: `$10,928.42`,
            description: `Available Balance`,
        },
        {
            title: `Argent Bank Credit Card (x8349)`,
            amount: `$184.30`,
            description: `Current Balance`,
        },
    ];

    return (
        <section className="transactions">
            <h2 className="sr-only">Accounts</h2>
            {transactions.map((transaction, index) => (
                <Transaction
                    key={index}
                    title={transaction.title}
                    amount={transaction.amount}
                    description={transaction.description}
                />
            ))}
        </section>
    );
}

export default TransactionItem;