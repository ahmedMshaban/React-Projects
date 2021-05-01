import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = [];
    props.info.forEach(item => {
        expenses.push(<ExpenseItem title={item.title} price={item.amount} date={item.date} />);
    });
    return (
        <div className="expenses">
            {expenses}</div >);
}

export default Expenses;