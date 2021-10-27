import React from "react";
import './ExpensesFilter.css';

const ExpensesAmountFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        console.log(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by amount</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value= '<'>under 400</option>
                    <option value='>='>over 400</option>
                </select>
            </div>
        </div>
    );

}


export default ExpensesAmountFilter;
