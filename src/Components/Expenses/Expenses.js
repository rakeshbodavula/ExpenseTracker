import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
    const initial_Year = '2022'
    const [filteredYear, setfilteredYear] = useState(initial_Year);
    //   const [filteredExpenses, setfilteredExpenses] = useState(props.expenses.filter(expense => expense.date.getFullYear() === initial_Year));

    const yearChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);

        // setfilteredExpenses(
        //   props.expenses.filter(
        //     (expense) => expense.date.getFullYear() === +selectedYear
        //   )
        // );
    };

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear() === +filteredYear
    })


    return (
        <div>
            <Card className="expenses">
                <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
                <ExpensesFilter
                    selected={filteredYear}
                    onYearChange={yearChangeHandler}
                ></ExpensesFilter>
                <ExpenseList items={filteredExpenses}></ExpenseList>
            </Card>
        </div>
    );
}

export default Expenses;
