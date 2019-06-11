document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  const taskForm = document.getElementById('create-task-form')
  taskForm.addEventListener('submit', submitTask)

  function submitTask(e) {
    e.preventDefault()

    const newTaskDesc = document.getElementById('new-task-description')
    taskList.addTask(newTaskDesc.value)
    
    newTaskDesc.value = ''

    renderApp()
  }

  renderApp()
});
