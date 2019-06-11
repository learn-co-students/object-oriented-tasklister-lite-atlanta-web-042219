document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  // Add Form Behavior Here!
  document.addEventListener('submit', handleSubmit)
  document.addEventListener('click', handleClick)

  function handleSubmit(e) {
    e.preventDefault()
    taskList.render()
    e.target.reset()
  }

  function handleClick(e) {
    if (e.target.className === 'delete') {
      taskList.deleteTask(e)
    }
    if (e.target.innerText === 'Ugliest Sort Button Ever') {
      taskList.sort()
      taskList.render()
    }
  }
});
