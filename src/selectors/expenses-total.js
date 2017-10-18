const getExpensesTotal = (expenses = []) => {
    return expenses.reduce((acc, next) => acc + next.amount, 0);
};

export default getExpensesTotal;