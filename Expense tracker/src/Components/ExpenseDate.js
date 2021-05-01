import './ExpenseDate.css';

function ExpenseDate(props) {
    return (
        <div class="expense-date">
            <div class="expense-date__month">{props.date.toLocaleDateString('en-US', { month: 'long' })}</div>
            <div class="expense-date__year">{props.date.getFullYear()}</div>
            <div class="expense-date__day">{props.date.toLocaleDateString('en-US', { day: 'numeric'})}</div>
        </div>
    );
}

export default ExpenseDate;