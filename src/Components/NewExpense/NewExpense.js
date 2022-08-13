import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
const NewExpenses = (props)=>{
    const [showForm,setShowForm] = useState(false)
    const SaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setShowForm(false)
    }

    const showFormHandler = ()=>{
        setShowForm(true);
    }

    const hideFormHandler = ()=>{
        setShowForm(false)
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler} onCancel = {hideFormHandler}></ExpenseForm>}
        </div>
    )
}

export default NewExpenses