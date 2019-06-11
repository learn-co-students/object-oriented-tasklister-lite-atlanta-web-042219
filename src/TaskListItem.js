class TaskListItem {
  
  constructor(task) {
    this.task = task
  }

  render() {
    return `<li> ${this.task} <button>x</button> </li>`
  }

}
