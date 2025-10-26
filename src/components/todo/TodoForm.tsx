import { useContext } from "react"
import { TodoContext } from "../../context/TodoProvider"


const TodoForm = () => {
    const { todoTitle } = useContext(TodoContext);
    console.log(todoTitle);
    return (
        <div>
            <h1>This is a Todo Form component</h1>
        </div>
    )
}

export default TodoForm