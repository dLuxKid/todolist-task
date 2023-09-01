import { Dispatch, SetStateAction } from 'react'
// type
import { TodosType } from "../Main/Main";

interface Props {
    todo: TodosType
    toggleTodo: (item: TodosType) => void
    setSideBarModal: Dispatch<SetStateAction<"" | "about" | "add" | "edit">>
    setSelectedTodo: Dispatch<SetStateAction<TodosType | null>>
}

export default function TodoListCard({
    todo,
    setSideBarModal,
    setSelectedTodo,
    toggleTodo, }: Props) {
    const { id, title, completed } = todo
    return (
        <li className="px-6 py-4 cursor-pointer flex-between bg-gray-50 hover:bg-gray-200 border-b border-b-gray-200 duration-200 ease-out transition-all" onClick={() => {
            setSideBarModal('about')
            setSelectedTodo(todo)
        }}>
            <div className="flex gap-3 items-center">
                <input
                    id={id.toLocaleString()}
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={completed}
                    onChange={() => toggleTodo(todo)}
                />
                <label
                    htmlFor={id.toLocaleString()}
                    className="peer-checked:line-through peer-checked:text-gray-300 flex-start flex-col"
                >
                    <span className="cursor-pointer text-sm font-medium text-gray-900 font-['Inter']">
                        {title}
                    </span>
                    <span className="cursor-pointer text-sm font-normal text-gray-600 font-['Inter']">
                        12:30pm - 1:30pm
                    </span>
                </label>
            </div>
            <div>
                <p className="text-sm font-normal text-gray-600">Today</p>
            </div>
        </li>
    )
}
