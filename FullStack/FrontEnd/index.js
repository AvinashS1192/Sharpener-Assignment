document.addEventListener("DOMContentLoaded", function () {
  fetch();
});
function fetch() {
  const users = axios
    .get("http://localhost:3000/users")
    .then((res) => {
      console.log(res.data);
      res.data.forEach((user) => {
        displayUser(user);
      });
    })
    .catch((err) => console.error(err));
}

const formHandler = (event) => {
  console.log("submit");
  event.preventDefault();

  const name = event.target.name.value;
  const number = event.target.number.value;
  const email = event.target.email.value;
  const user = { name, number, email };
  axios
    .post("http://localhost:3000/users", user)
    .then((res) => {
      displayUser(user);
    })
    .catch((err) => console.error(err));
};

function displayUser(user) {
  const usersList = document.getElementById("usersList");
  const li = document.createElement("li");
  li.id = user.id;
  li.textContent = `${user.name} - ${user.number} - ${user.email}`;

  const delteBtn = document.createElement("button");
  delteBtn.textContent = "Delete";
  delteBtn.addEventListener("click", function () {
    axios
      .delete(`http://localhost:3000/users/${this.parentElement.id}`)
      .then(() => {
        const ele = document.getElementById(toString(user.id));
        usersList.removeChild(ele);
      });
  });
  li.appendChild(delteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", function () {
    const newName = prompt("Enter new name:", user.name);
    const newNumber = prompt("Enter new number:", user.number);
    const newEmail = prompt("Enter new email:", user.email);
    if (newName && newNumber && newEmail) {
      axios
        .put(`http://localhost:3000/users/${this.parentElement.id}`, {
          name: newName,
          number: newNumber,
          email: newEmail,
        })
        .then(() => {
          li.textContent = `${newName} - ${newNumber} - ${newEmail}`;
        });
    }
  });
  li.appendChild(editBtn);
  usersList.appendChild(li);
}
