document.addEventListener("DOMContentLoaded", () => {
  start();
});
function start() {
  axios
    .get("https://crudcrud.com/api/526899e0defe49d5a591792c28f77cc1/todo")
    .then((res) => {
      const Todos = res.data;
      const completed = Todos.filter((todo) => {
        return todo.completed;
      });
      const notCompleted = Todos.filter((todo) => {
        return !todo.completed;
      });
      displayCompleted(completed);
      displayNotCompleted(notCompleted);
    });
}

function onSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("TodoName").value.trim();
  const description = document.getElementById("TodoDesc").value.trim();
  const todo = {
    name,
    description,
    completed: false,
  };
  axios.post(
    "https://crudcrud.com/api/526899e0defe49d5a591792c28f77cc1/todo",
    todo
  );
  start();
}

function displayCompleted(todos) {
  const parent = document.querySelector(".done");
  parent.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.name;
    li.textContent += ": " + todo.description;
    li.dataset.id = todo._id;
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn btn-delete";
    delBtn.onclick = function () {
      axios
        .delete(
          `https://crudcrud.com/api/526899e0defe49d5a591792c28f77cc1/todo/${todo._id}`
        )
        .then(() => {
          li.remove();
        })
        .catch((err) => {
          alert("Failed to delete todo");
        });
    };
    li.appendChild(delBtn);
    parent.appendChild(li);
  });
}
function displayNotCompleted(todos) {
  const parent = document.querySelector(".pending");
  parent.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.name;
    li.textContent += ": " + todo.description;
    li.dataset.id = todo._id;

    const tickBtn = document.createElement("button");
    tickBtn.textContent = "✔";
    tickBtn.className = "btn btn-tick";
    tickBtn.onclick = function () {
      axios
        .put(
          `https://crudcrud.com/api/526899e0defe49d5a591792c28f77cc1/todo/${todo._id}`,
          { ...todo, completed: true }
        )
        .then(() => {
          start();
        })
        .catch(() => {
          alert("Failed to mark as completed");
        });
    };

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "btn btn-delete";
    delBtn.onclick = function () {
      axios
        .delete(
          `https://crudcrud.com/api/526899e0defe49d5a591792c28f77cc1/todo/${todo._id}`
        )
        .then(() => {
          li.remove();
        })
        .catch((err) => {
          alert("Failed to delete todo");
        });
    };
    li.appendChild(tickBtn);
    li.appendChild(delBtn);
    parent.appendChild(li);
  });
}
