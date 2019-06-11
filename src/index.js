document.addEventListener("DOMContentLoaded", () => {

	// VARIABLES
	const taskForm = document.getElementById('create-task-form')
	const submitBtn = document.getElementById('new-task-btn')
  const listDiv = document.getElementById("list")
  const list = new TaskList()

	// MAIN
	document.addEventListener('click', handleClickEvents)
	document.getElementById('sort').addEventListener('change', sort_tasks)
	list.add(new TaskListItem('Hello, world!'))
	renderApp()

	//											//
	// FUNCTION DEFINITIONS //
	//											//
	function handleClickEvents(e) {
		// console.log(e.target)
		if(e.target.id === 'new-task-btn')
			new_task(e)
		else if(e.target.className === 'delete-btn')
			e.target.parentElement.remove()
	}

	function sort_tasks(e) {
		list.sort(e.target.value)
		renderApp()
	}

  function new_task(e) {
  	e.preventDefault()
  	
  	let newTask = new TaskListItem(taskForm['new-task-description'].value, taskForm['priority'].value)
  	listDiv.innerHTML += newTask.render()

  	list.add(newTask)
  	taskForm.reset()
  }

  function renderApp() {
  	listDiv.innerHTML = list.render()
  }

  // END //
})
