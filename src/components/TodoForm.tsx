import React, {useEffect, useState} from 'react';
import { addTodo, updateTodo } from '../store/counter/counterSlice';
import {useAppDispatch} from '../store';



interface ITodo {
    id: number;
    text: string;
}

interface ITodoFormProps {
    edit: ITodo | null;
    setEdit: (edit: ITodo | null) => void;
}

const TodoForm: React.FC<ITodoFormProps> = ({ edit, setEdit }) => {
    const [text, setText] = useState(edit ? edit.text : '');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (edit) {
            setText(edit.text);
        }
    }, [edit]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (edit) {
            dispatch(updateTodo({
                id: edit.id,
                text
            }));
            setEdit(null);
        } else {
            dispatch(addTodo({
                id: Date.now(),
                text
            }));
        }

        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a todo"
                required
                style={{marginBottom: '5px'}}
            />
            <button type="submit" style={{marginLeft: '5px'}}>{edit ? '更新' : '新增'}</button>
        </form>
    );
};

export default TodoForm;
