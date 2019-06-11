class TaskListItem {
  constructor(description, rate) {
    this.description = description
    this.rate = rate
  }

  createLi() {
    const li = document.createElement('li')
    li.dataset.id = "undefined"
    switch (this.rate) {
      case 1:
        li.style.color = 'red'
        break;
      case 2:
        li.style.color = 'yellow'
        break;
      case 3:
        li.style.color = 'green'
        break;
    }
    li.innerHTML = `${this.description} <button class="delete">x</button>`
    return li
  }
}