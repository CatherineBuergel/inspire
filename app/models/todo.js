export default class Todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
  }

  getTemplate() {
    return `<div class="form-check">
				<input class="form-check-input" type="checkbox">
				<label class="form-check-label">
					${this.description}
        </label>
        <span onclick="app.controllers.todoController.removeTodo('${this._id}')">
        <i class="far fa-trash-alt"></i>
        </span>
			</div>`
  }

}