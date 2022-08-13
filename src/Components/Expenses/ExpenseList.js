import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props)=>{

    if(props.items.length === 0 ){
        return <h2 className='expenses-list__fallback'>No expenses found!</h2>
    }

    if(props.items.length > 0){
        return (
            <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
            ))}
            </ul>
        )
    }
}

export default ExpenseList;