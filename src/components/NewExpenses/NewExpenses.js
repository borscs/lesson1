import React from "react";

import ExpensesForm from './ExpensesForm';
import './NewExpenes.css'

const NewExpenses = () => {
    return(
        <div className='new-expense'>
            <ExpensesForm/>
        </div>
    );
};

export default NewExpenses;
