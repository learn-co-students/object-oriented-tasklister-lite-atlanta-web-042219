class TaskListItem {
	
  constructor(item, color='Black') {
  	this.item = item
  	this.color = color
  	this.priority = this.setPriority()
  }

  setPriority() {
  	switch(this.color) {
  		case 'Black': return 0
  		case 'Green': return 1
  		case 'Orange': return 2
  		case 'Red': return 3
  	}
  }

  render() {
  	return `<li style="color:${this.color};">${this.item}  &nbsp; <button class="edit-btn">Edit</button>  &nbsp; <button class="delete-btn">Delete</button></li>`
  }
}
