document.addEventListener("DOMContentLoaded", () => {
  initialize();
});
function initialize() {
  const expenses = JSON.parse(localStorage.getItem("expenseList")) || [];
  display(expenses);
}
function onSubmitHandler(e) {
  e.preventDefault();
  const flag = document.querySelector("button[type='submit']").textContent;
  if (flag == "ADD") {
    const amount = e.target.expense_amount.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const expense = {
      id: Date.now(),
      amount,
      description,
      category,
    };
    const expenses = JSON.parse(localStorage.getItem("expenseList")) || [];
    const newexpense = [...expenses, expense];
    localStorage.setItem("expenseList", JSON.stringify(newexpense));
    display(newexpense);
  } else {
    const amount = e.target.expense_amount.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const id = Number(sessionStorage.getItem("edit"));
    const expense = {
      id,
      amount,
      description,
      category,
    };
    const expenses = JSON.parse(localStorage.getItem("expenseList")) || [];
    for (let i = 0; i < expenses.length; i++) {
      if (expenses[i].id == id) {
        expenses[i].amount = amount;
        expense[i].description = description;
        expense[i].category = category;
      }
    }
    localStorage.setItem("expenseList", JSON.stringify(expenses));
    display(expenses);
    document.querySelector("button[type='submit']").textContent = "ADD";
  }
}
function display(data) {
  const parent = document.querySelector("ul");
  data.forEach((expense, i) => {
    const ele = document.createElement("li");
    const del = document.createElement("button");
    const edit = document.createElement("button");
    ele.id = expense.id;
    ele.textContent = `${expense.amount},${expense.description},${expense.category}`;
    del.addEventListener("onclick", dele(expense.id, ele));
    edit.addEventListener("onclick", edit(expense.id, i));

    ele.appendChild(del);
    ele.appendChild(edit);
    parent.appendChild(ele);
  });
}
function dele(id, ele) {
  const expenses = JSON.parse(localStorage.getItem("expenseList")) || [];
  const updated = [];
  for (let i = 0; i < expenses.length; i++) {
    if (expenses[i].id == id) {
      continue;
    }
    updated.push(expenses[i]);
  }
  localStorage.setItem("expenseList", JSON.stringify(updated));
  display(updated);
}
function edit(id, idx) {
  const edit = document.getElementById(id).textContent;
  const elements = edit.split(",");
  document.getElementById("amount").textContent = elements[0];
  document.getElementById("description").textContent = elements[1];
  document.getElementById("category").textContent = elements[2];
  document.querySelector("button[type='submit']").textContent = "UPDATE";
  sessionStorage.setItem("edit", id);
}
