document.addEventListener("DOMContentLoaded", () => {
  const task = document.getElementById("new-task-description");
  const submit = document.getElementById("submit");
  const list = document.getElementById("list");
  // const taskList = document.getElementById("tasks")

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    let todo = task.value;
    list.innerHTML += `<li>${todo}
    <button data-action = "delete"> X </button>
    </li>`;
  });

  list.addEventListener("click", function (e) {
    if (e.target.dataset.action === "delete") {
      e.target.parentElement.remove();
    }
  })

});