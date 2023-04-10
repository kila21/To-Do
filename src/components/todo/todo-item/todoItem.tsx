
import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';

import './todoItem.css'
import { activeClasses } from '../../../store/todo/todo.slice';

const TodoItem = (props: any) => {
    const [click, setClick] = useState(props.isSelected)

    const dispatch = useAppDispatch()

    const clickHandler = () => {
        props.onClick(props.index)
        console.log(props)
    }

    const text = props.isSelected ?
     <del className='success-text' onClick={clickHandler}>{props.text}</del> 
     : <p>{props.text}</p>

    return (
        <div className="todo-item">
            <span 
            onClick={() => dispatch(activeClasses(props.index))} 
            className={props.isSelected ? "item-success success-check" : 'item-success'}
            >
                {props.isSelected ? String.fromCharCode(62) : ''}
            </span>
            
            <div onClick={clickHandler} className="item-text">
                {text}
            </div>
        </div>
    )
}

export default TodoItem;