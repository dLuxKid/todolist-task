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
        <li
            className="px-6 py-4 cursor-pointer flex-between bg-gray-50 hover:bg-gray-200 border-b border-b-gray-200 duration-200 ease-out transition-all"
            onClick={() => {
                setSideBarModal('about')
                setSelectedTodo(todo)
            }}
        >
            <div className="flex gap-3 items-center">
                <input
                    id={id.toLocaleString()}
                    title='checkmark'
                    type="checkbox"
                    className="cursor-pointer peer hidden"
                    defaultChecked={completed}
                    onChange={() => toggleTodo(todo)}
                />
                <label htmlFor={id.toLocaleString()} className={`w-5 h-5 border ${completed ? 'border-blue-pry' : 'border-gray-300'} bg-white rounded-md flex-center cursor-pointer`}>

                    <svg className={completed ? 'block' : 'hidden'
                    } xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><path fill="#3f5bf6" d="M29.907 5.14a1.25 1.25 0 0 1-.047 1.767l-19 18a1.25 1.25 0 0 1-1.775-.055l-6.75-7.25a1.25 1.25 0 0 1 1.83-1.704l5.89 6.327L28.14 5.093a1.25 1.25 0 0 1 1.767.047Z" /></svg>
                </label>
                <div
                    className="peer-checked:line-through peer-checked:text-gray-300 flex-start flex-col"
                >
                    <span className="cursor-pointer text-sm font-medium text-gray-900 peer-checked:font-['Inter']">
                        {title}
                    </span>
                    <span className="cursor-pointer text-sm font-normal text-gray-600 peer-checked:font-['Inter']">
                        12:30pm - 1:30pm
                    </span>
                </div>
            </div>
            <div>
                <p className="text-sm font-normal text-gray-600">Today</p>
            </div>
        </li >
    )
}