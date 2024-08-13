import React from 'react';
import { deleteTodo } from '../store/counter/counterSlice';
import {useAppDispatch} from '../store';


interface ITodo {
    id: number;
    text: string;
}

interface ITodoItemProps {
    todo: ITodo;
    onEdit: (todo: ITodo) => void;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todo, onEdit }) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => onEdit(todo)} style={{marginLeft: '5px', marginBottom: '5px'}}>修改</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))} style={{marginLeft: '5px', marginBottom: '5px'}}>刪除</button>
        </div>
    );
};

export default TodoItem;