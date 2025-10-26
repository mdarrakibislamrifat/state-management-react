import "./App.css";
import TodoForm from "./components/todo/TodoForm";
import TodoProvider from "./context/TodoProvider";



function App() {
  return (
    <TodoProvider>

      <TodoForm />


    </TodoProvider>

  );
}

export default App;
