
addDragnDropEvent(chooseTask, idUser) {
  chooseTask.setAttribute('draggable', true)
  chooseTask.addEventListener("dragstart", Task.evenDragStartTask)
  chooseTask.addEventListener("dragend", Task.evenDragEndTask)
  chooseTask.addEventListener("dragenter", Task.evenDragEnterTask)
  chooseTask.addEventListener("dragover", Task.evenDragOverTask)
  chooseTask.addEventListener("dragleave", Task.evenDragLeaveTask)
  chooseTask.addEventListener("drop", Task.evenDragDropTask)
},

evenDragStartTask(event) {
  event.stopPropagation()
  this.classList.add("dragElement")
  Task.darggbleTask = this
},

evenDragEndTask(event, idUser) {
  event.stopPropagation()
  this.classList.remove("dragElement")
  Task.darggbleTask = null
  let taskId = this.closest('.task').getAttribute('data-task-id')
  let columnId = this.closest('.column').getAttribute('data-column-id')
  let value = this.querySelector('.task-text').innerHTML

  let body = {
      idUser: idUser,
      id: taskId,
      idParent: columnId,
      text: value
  }
  axios.post('/task/update', body)
          .then(function (response) {

          })
          .catch(function (error) {
              // handle error 

          })
          .then(function () {
              // always executed
          });

},

evenDragEnterTask(event) {
  event.stopPropagation()
},

evenDragOverTask(event) {
  event.preventDefault()
  event.stopPropagation()
},

evenDragLeaveTask(event) {
  event.stopPropagation()
},

evenDragDropTask(event) {
  event.preventDefault()
  event.stopPropagation()

  if (Task.darggbleTask !== this) {

      if (this.parentElement === Task.darggbleTask.parentElement) {
          const parentElements = Array.from(this.parentElement.querySelectorAll(".task"))
          const x = parentElements.indexOf(this)
          const y = parentElements.indexOf(Task.darggbleTask)
          if (x < y) {
              this.parentElement.insertBefore(Task.darggbleTask, this)
          } else {
              this.parentElement.insertBefore(Task.darggbleTask, this.nextElementSibling)
          }
      } else {
          this.parentElement.insertBefore(Task.darggbleTask, this)
      }
  }