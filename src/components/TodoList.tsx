import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import {useAppSelector} from '../store';

interface ITodo {
    id: number;
    text: string;
}

const TodoList: React.FC = () => {
    const [edit, setEdit] = useState<ITodo | null>(null);
    const [query, setQuery] =  useState<string>('');
    const todos = useAppSelector(state => state.todos.filter(todo => todo.text.includes(query)));

    return (
        <div className="column-gap-3">
            <TodoForm edit={edit} setEdit={setEdit} />

            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search todos"
                style={{marginBottom: '5px'}}
            />

            <div>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onEdit={setEdit} />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
