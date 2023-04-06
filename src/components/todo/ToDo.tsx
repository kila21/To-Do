

import './ToDo.css'
import TodoItem from './todo-item/todoItem'




const ToDo = () => {
    const array = [1,2,3,4,5,7]

    return (
        <>
        <input type='text' className='todo-create' />

        <div className='todo-container'>
           {array.map((item, index) => {
                return <TodoItem key={index}/>
           })}
        </div>
        <div className='todo-info'>
           <div>{array.length} items</div>
           <div>Clear Items</div>
        </div>
        </>
    )
}

export default ToDo;