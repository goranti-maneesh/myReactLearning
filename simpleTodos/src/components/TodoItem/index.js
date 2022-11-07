// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoitem-container">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
