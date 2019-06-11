class TaskList {

	constructor(task_arr=[]) {
		this.tasks = []
		this.tasks.concat(task_arr)
	}

	add(new_task) {
		this.tasks.push(new_task)
	}

	sort(sort_method) {
		if(sort_method === 'alpha')
			this.tasks = this.tasks.sort(function(a,b){
			  if (a.item.toLowerCase() < b.item.toLowerCase()) return -1
			  if (a.item.toLowerCase() > b.item.toLowerCase()) return  1
			  return 0
			})
		else if(sort_method === 'asc_prio')
			this.tasks = this.tasks.sort(function(a,b){
			  if (a.priority < b.priority) return -1
			  if (a.priority > b.priority) return  1
			  return 0
			})
		else if(sort_method === 'desc_prio')
			this.tasks = this.tasks.sort(function(a,b){
			  if (a.priority < b.priority) return  1
			  if (a.priority > b.priority) return -1
			  return 0
			})
	}

	render() {
		console.log(this.tasks)
		let html = ''
		this.tasks.forEach(tli => html += tli.render())
		return html
	}

	alphabetical(a, b) {
	}
}
