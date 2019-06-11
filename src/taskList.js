class TaskList {
  constructor() {
    this.tasks = []
  }

  addTask(task) {
    let item = new TaskListItem(task)
    this.tasks.push(item)
  }

  render() {
    return `${ this.tasks.map(task => task.render()).join('') }`
  }

}
