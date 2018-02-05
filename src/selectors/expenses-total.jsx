export default (expenses = []) => {
  return expenses.map(element => element.amount).reduce(((acc, curr) => acc + curr), 0);
}
