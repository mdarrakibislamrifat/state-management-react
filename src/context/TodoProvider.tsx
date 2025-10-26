

import React, { createContext, useReducer, type ReactNode } from "react"

type TodoProps = {
    children: ReactNode
}

type TTodo = {
    id: string,
    title: string,
    isCompleted: boolean
}

type TAction = {
    type: "addTodo" | "taskComplete"
    payload: TTodo | string
}


export const TodoContext = createContext<{ state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined>(undefined);

const typeConstants = {
    ADD_TODO: "addTodo",
    TASK_COMPLETE: "taskComplete"
}
const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
    switch (action.type) {
        case typeConstants.ADD_TODO:
            return [...currentState, action.payload]
        case typeConstants.TASK_COMPLETE:
            return currentState.map((item) => item.id === action.payload ? { ...item, isCompleted: !item.isCompleted } : item);
        default:
            return currentState
    }
}



const TodoProvider = ({ children }: TodoProps) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const values = {
        state,
        dispatch
    }
    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider