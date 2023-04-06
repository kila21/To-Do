
import './todoItem.css'

const TodoItem = () => {
    return (
        <div className="todo-item">
            <span className="item-success">&#10004;</span>
            <div className="item-text">
                <p>Create new ToDo...</p>
                {/* {} */}
            </div>
        </div>
    )
}

export default TodoItem;