import {createSlice, PayloadAction} from '@reduxjs/toolkit';



export interface ITodo {
    id: number;
    text: string;
}

type State = ITodo[];

const initialState: State = [];

const counterSlice = createSlice({
    name: 'todos',
    initialState,

    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
            const { id, text } = action.payload;
            const todo = state.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
    },
});

export const { addTodo, deleteTodo, updateTodo } = counterSlice.actions;

export default counterSlice.reducer;