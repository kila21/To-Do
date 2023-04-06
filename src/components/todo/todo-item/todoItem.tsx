
import { useState } from 'react';
import './todoItem.css'

const TodoItem = (props: any) => {
    const [click, setClicked] = useState(false)

    const text = <del className='success-text' onClick={props.onClick}>{props.text}</del>
    return (
        <div  className="todo-item">
            <span 
            onClick={() => setClicked(!click)} 
            className={click ? "item-success success-check" : 'item-success'}
            >
                {click ? String.fromCharCode(62) : ''}
            </span>
            
            <div onClick={props.onClick} className="item-text">
                {click ? text : <p>{props.text}</p>}
            </div>
        </div>
    )
}

export default TodoItem;