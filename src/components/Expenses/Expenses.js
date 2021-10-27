import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesAmountFilter from "./ExpensesAmountFIlter";
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filteredAmount, setFilteredAmount] = useState('<');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filterChangeAmount = (selectAmountFilter) => {
        setFilteredAmount(selectAmountFilter);
    }

    const filteredExpenses = props.items.filter((expense) => {
        if(filteredAmount === '<') {
            return expense.date.getFullYear().toString() === filteredYear && expense.amount < 400;
        }else{
            return expense.date.getFullYear().toString() === filteredYear && expense.amount >= 400;
        }
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesAmountFilter
                    slected={filteredAmount}
                    onChangeFilter={filterChangeAmount}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
