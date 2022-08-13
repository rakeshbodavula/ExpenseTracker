import { useState } from 'react'

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expense.title)
    // const title = props.expense.title
    const amount = props.expense.amount
    const date = props.expense.date

    const clickHandler = () => {
        setTitle('Updated!!')
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date}></ExpenseDate>
                {/* <div>{date.toISOString()}</div> */}
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>Rs {amount}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    )
}

export default ExpenseItem