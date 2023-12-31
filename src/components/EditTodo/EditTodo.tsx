import { Dispatch, SetStateAction, useState } from "react"
// types
import { TodosType } from "../Main/Main"

interface Props {
    selectedTodo: TodosType
    editTodo: (item: TodosType) => void
    setSideBarModal: Dispatch<SetStateAction<"" | "about" | "add" | "edit">>
}


export default function EditTodo({ selectedTodo, editTodo, setSideBarModal }: Props) {
    const [todoInput, setTodoInput] = useState<string>(selectedTodo.title)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (todoInput) {
            editTodo({ ...selectedTodo, title: todoInput })
            setSideBarModal('')
        }
    }

    const handleCancel = () => {
        setTodoInput('')
        setSideBarModal('')
    }

    return (
        <div className="h-[70vh] md:h-auto md:max-w-[24.625rem] w-full flex-start md:flex-center flex-col rounded-xl bg-white shadow-md">
            <div className="px-6 pt-6 flex flex-col gap-4 w-full">
                <div className="flex-between gap-4">
                    <p className="text-gray-900 text-lg font-semibold">Edit Task</p>
                    <span className="cursor-pointer" onClick={handleCancel}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
                <div className="flex items-start self-stretch py-3 px-[14px] w-full h-[8.75rem] border border-gray-300 bg-gray-50 rounded-lg shadow">
                    <textarea
                        title="edit todo"
                        name="todo"
                        className="bg-transparent text-base outline-none text-gray-500 font-normal h-full w-full"
                        value={todoInput}
                        onChange={e => setTodoInput(e.target.value)}
                    />
                </div>
                <div className="flex-start flex-wrap gap-x-4 gap-y-2">
                    <div>
                        <span className="flex gap-2 px-2 py-[10px] border border-gray-300 rounded-lg bg-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 8.33334H2.5M13.3333 1.66667V5.00001M6.66667 1.66667V5.00001M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33334C17.5 5.93321 17.5 5.23314 17.2275 4.69836C16.9878 4.22796 16.6054 3.84551 16.135 3.60582C15.6002 3.33334 14.9001 3.33334 13.5 3.33334H6.5C5.09987 3.33334 4.3998 3.33334 3.86502 3.60582C3.39462 3.84551 3.01217 4.22796 2.77248 4.69836C2.5 5.23314 2.5 5.93321 2.5 7.33334V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z" stroke="#344054" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm font-semibold text-gray-500">Today</p>
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="flex gap-2 px-2 py-[10px] border border-gray-300 rounded-lg bg-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_12192)">
                                    <path d="M9.99984 5.00001V10L13.3332 11.6667M18.3332 10C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 10C1.6665 5.39763 5.39746 1.66667 9.99984 1.66667C14.6022 1.66667 18.3332 5.39763 18.3332 10Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_12192">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-sm font-semibold text-gray-500">00:00</p>
                        </span>
                        <span className="flex gap-2 px-2 py-[10px] border border-gray-300 rounded-lg bg-white">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_12192)">
                                    <path d="M9.99984 5.00001V10L13.3332 11.6667M18.3332 10C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 10C1.6665 5.39763 5.39746 1.66667 9.99984 1.66667C14.6022 1.66667 18.3332 5.39763 18.3332 10Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_12192">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-sm font-semibold text-gray-500">00:00</p>
                        </span>
                    </div>
                </div>
                <div className="flex-between">
                    <span className="flex items-center gap-2">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9998 7.96666C11.9998 7.04724 11.5784 6.16548 10.8282 5.51536C10.0781 4.86523 9.06068 4.49999 7.99981 4.49999C6.93895 4.49999 5.92153 4.86523 5.17139 5.51536C4.42124 6.16548 3.99981 7.04724 3.99981 7.96666C3.99981 9.48786 3.62257 10.6004 3.15186 11.3964C2.61537 12.3037 2.34713 12.7574 2.35772 12.8658C2.36984 12.9897 2.39216 13.0289 2.49271 13.1024C2.58059 13.1667 3.02215 13.1667 3.90527 13.1667H12.0944C12.9775 13.1667 13.419 13.1667 13.5069 13.1024C13.6075 13.0289 13.6298 12.9897 13.6419 12.8658C13.6525 12.7574 13.3843 12.3037 12.8478 11.3964C12.3771 10.6004 11.9998 9.48786 11.9998 7.96666Z" fill="#667085" />
                            <path d="M9.99981 13.1667C9.99981 14.2712 9.10438 15.1667 7.99981 15.1667C6.89524 15.1667 5.99981 14.2712 5.99981 13.1667M9.19748 4.65903C9.48781 4.35909 9.66648 3.95041 9.66648 3.49999C9.66648 2.57952 8.92029 1.83333 7.99981 1.83333C7.07934 1.83333 6.33315 2.57952 6.33315 3.49999C6.33315 3.95041 6.51182 4.35909 6.80214 4.65903M11.9998 7.96666C11.9998 7.04724 11.5784 6.16548 10.8282 5.51536C10.0781 4.86523 9.06068 4.49999 7.99981 4.49999C6.93895 4.49999 5.92153 4.86523 5.17139 5.51536C4.42124 6.16548 3.99981 7.04724 3.99981 7.96666C3.99981 9.48786 3.62257 10.6004 3.15186 11.3964C2.61537 12.3037 2.34713 12.7574 2.35772 12.8658C2.36984 12.9897 2.39216 13.0289 2.49271 13.1024C2.58059 13.1667 3.02215 13.1667 3.90527 13.1667H12.0944C12.9775 13.1667 13.419 13.1667 13.5069 13.1024C13.6075 13.0289 13.6298 12.9897 13.6419 12.8658C13.6525 12.7574 13.3843 12.3037 12.8478 11.3964C12.3771 10.6004 11.9998 9.48786 11.9998 7.96666Z" stroke="#667085" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base text-gray-900 font-medium font-['Inter']">10 minutes before</p>
                    </span>
                    <span className="flex-center cursor-pointer">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4.5L4 12.5M4 4.5L12 12.5" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="pt-8 pb-6 px-6 flex gap-3 w-full">
                <button type="button" className="flex-center shadow-sm py-[10px] px-[18px] text-semibold text-sm md:text-base text-gray-700 bg-white border border-gray-300 rounded-lg flex-1" onClick={handleCancel}>
                    Cancel
                </button>
                <button type="button" className="flex-center shadow-sm py-[10px] px-[18px] text-semibold text-sm md:text-base text-white bg-blue-pry border border-blue-pry rounded-lg flex-1" onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </div>
    )
}
