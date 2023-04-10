import './toDo.css'
import TodoItem from './todo-item/todoItem'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addTodo, clearTodos, removeTodo } from '../../store/todo/todo.slice'

import { Todo } from '../../types/todo.type'



const ToDo = () => {
    const selector = useAppSelector(state => state.todo)
    const dispatch = useAppDispatch();

    const array = selector.todos
    // useEffect(() => {
    //     const array = selector.todos
    // }, [dispatch])

    
    const addTodoHandler = () => {
        const input = document.getElementById('todo-input') as HTMLInputElement;
        // array.push({text: input.value})
        const todo: Todo = {text: input.value, isSelected: false}
        dispatch(addTodo(todo))
        input.value = ''
    }

    const removeTodoHandler = (index: number) => {
        dispatch(removeTodo(index))
    }

    return (
        <>
        <div className='todo-create'>
            <input id='todo-input' type='text' />
            <button onClick={addTodoHandler}>Add ToDo</button>
        </div>

        <div className='todo-container'>
           {array && array.map((item, index) => {
                return <TodoItem onClick={removeTodoHandler} isSelected={item.isSelected} index={index} key={10+index} text={item.text}/>
           })}
        </div>

        <div className='todo-info'>
           <div>{array.length} items</div>
           <div onClick={() => dispatch(clearTodos())}>Clear Items</div>
        </div>
        </>
    )
}

export default ToDo;
