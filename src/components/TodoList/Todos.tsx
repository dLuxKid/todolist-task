// components
import Loader from "../Loader/Loader";
import TodoListCard from "./TodoListCard";
// types
import { TodosType } from "../Main/Main";

interface Props {
    loading: boolean,
    error: string,
    todos: TodosType,
    toggleTodo: (id: number, completed: boolean) => void
}

export default function Todos({ loading, toggleTodo, error, todos }: Props) {
    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-base font-semibold text-gray-900">Tasks</h1>
            {loading && <Loader />}
            {error && <p className='text-center w-full items-center text-base font-semibold text-red-600'>{error}</p>}
            <ul className="w-full flex flex-col gap-4">
                {
                    // TODO: add functionality to card, style custom checkmark
                    todos.map(todo => <TodoListCard key={todo.id} {...todo} toggleTodo={toggleTodo} />)
                }
            </ul>
        </div>
    )
}
