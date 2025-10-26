import { useContext } from "react"
import { TodoContext } from "../../context/TodoProvider"
type TTodo = {
    id: string,
    title: string,
    isCompleted: boolean
}


const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext);
    console.log(state);

    return (
        <div>
            {
                state.map((item: TTodo) => (
                    <p onClick={() => dispatch({ type: "taskComplete", payload: item.id })}
                        className={`cursor-pointer ${item.isCompleted ? 'line-through' : ''}`}>
                        {item.title}
                    </p>
                ))
            }
        </div>
    )
}

export default TodoList;