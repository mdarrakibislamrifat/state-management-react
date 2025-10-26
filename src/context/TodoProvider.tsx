import { createContext, type ReactNode } from "react"

type TodoProviderProps = {
    children: ReactNode
}

export const TodoContext = createContext(undefined);

const TodoProvider = ({ children }: TodoProviderProps) => {
    const values = {
        todoTitle: "this is a Todo title"
    }
    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;