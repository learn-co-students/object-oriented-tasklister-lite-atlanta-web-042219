class TaskList {

  constructor() {
    this.tasks = []
  }

  render() {
    const listContainer = document.getElementById("list");
    listContainer.innerHTML = ''
    const item = new TaskListItem(document.querySelector('#new-task-description').value, parseInt(document.querySelector('#new-task-rate').value))
    this.tasks.push(item)
    this.tasks.forEach(item => {
      const newItem = item.createLi()
      newItem.dataset.id = this.tasks.indexOf(item)
      listContainer.appendChild(newItem)
    })
  }

  deleteTask(e) {
    this.tasks.splice(parseInt(e.target.parentElement.dataset.id), 1)
    e.target.parentElement.remove()
  }

  sort() {
    console.log(this.tasks)
    this.tasks.sort((a, b) => {
      if (a.rate < b.rate) { return -1 }
      if (a.rate > b.rate) { return 1 }
      return 0
    })
  }

}
