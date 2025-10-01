document.addEventListener("DOMContentLoaded", () => {
  fetchExpenses();
});

const formHandler = async (event) => {
  event.preventDefault();
  const amount = event.target.amount.value;
  const name = event.target.name.value;
  const expense = { name, amount };
  const result = await axios.post("http://localhost:3000/expense", expense);
  console.log(result);
  displayExpense(result.data);
};

const fetchExpenses = async () => {
  const result = await axios.get("http://localhost:3000/expense");
  console.log(result);
  result.data.forEach((expense) => {
    displayExpense(expense);
  });
};

displayExpense = (expense) => {
  const expenseList = document.getElementById("board");
  const li = document.createElement("li");
  li.id = String(expense.id);
  li.textContent = `${expense.name} - ${expense.amount}`;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    axios.delete(`http://localhost:3000/expense/${expense.id}`).then(() => {
      expenseList.removeChild(li);
    });
  });
  li.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    const newName = prompt("Enter new name:", expense.name);
    const newAmount = prompt("Enter new amount:", expense.amount);
    if (newName && newAmount) {
      console.log(editBtn.parentElement.id);
      axios
        .put(`http://localhost:3000/expense/${expense.id}`, {
          name: newName,
          amount: newAmount,
        })
        .then(() => {
          li.textContent = `${newName} - ${newAmount}`;
          li.appendChild(deleteBtn);
          li.appendChild(editBtn);
        });
    }
  });
  li.appendChild(editBtn);
  expenseList.appendChild(li);
};
