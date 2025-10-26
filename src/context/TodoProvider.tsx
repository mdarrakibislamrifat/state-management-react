

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
    type: string
    payload: TTodo
}


export const TodoContext = createContext<{ state: TTodo[]; dispatch: React.Dispatch<TAction> } | undefined>(undefined);

const initialState: TTodo[] = [];

const reducer = (currentState: TTodo[], action: TAction) => {
    switch (action.type) {
        case "addTodo":
            return [...currentState, action.payload]
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