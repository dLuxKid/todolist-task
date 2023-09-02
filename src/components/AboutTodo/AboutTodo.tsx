import { Dispatch, SetStateAction } from "react"
// types
import { TodosType } from "../Main/Main"

interface Props {
    selectedTodo: TodosType
    deleteTodo: (item: TodosType) => void
    setSideBarModal: Dispatch<SetStateAction<"" | "about" | "add" | "edit">>
}

export default function AboutTodo({ selectedTodo, deleteTodo, setSideBarModal }: Props) {

    return (
        <div className="h-[70vh] md:h-auto md:max-w-[24.625rem] w-full flex-start md:flex-center flex-col rounded-xl bg-white shadow-md px-6 py-[20px]">
            <div className="flex flex-col gap-4 w-full">
                <div className="flex-end">
                    <span className="cursor-pointer" onClick={() => setSideBarModal("")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#09121F" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>
                <div className="flex-start flex-col gap-8">
                    <div>
                        <p className="font-bold text-lg text-gray-normal">{selectedTodo.title}</p>
                    </div>
                    <div className="flex-between flex-col gap-2">
                        <div className="flex gap-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 8.33334H2.5M13.3333 1.66667V5.00001M6.66667 1.66667V5.00001M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0609C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33334C17.5 5.93321 17.5 5.23314 17.2275 4.69836C16.9878 4.22796 16.6054 3.84551 16.135 3.60582C15.6002 3.33334 14.9001 3.33334 13.5 3.33334H6.5C5.09987 3.33334 4.3998 3.33334 3.86502 3.60582C3.39462 3.84551 3.01217 4.22796 2.77248 4.69836C2.5 5.23314 2.5 5.93321 2.5 7.33334V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0609C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z" stroke="#3F5BF6" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-base font-medium text-gray-normal">20th, January, 2023</p>
                        </div>

                        <div className="flex gap-2 w-full">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_18_17775)">
                                    <path d="M9.99984 5V10L13.3332 11.6667M18.3332 10C18.3332 14.6024 14.6022 18.3333 9.99984 18.3333C5.39746 18.3333 1.6665 14.6024 1.6665 10C1.6665 5.39762 5.39746 1.66666 9.99984 1.66666C14.6022 1.66666 18.3332 5.39762 18.3332 10Z" stroke="#3F5BF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_18_17775">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-base font-medium text-gray-normal">00:00</p>
                        </div>
                    </div>
                </div>
                <div className="pt-[2px] flex gap-3 w-full">
                    <button type="button" className="flex-center shadow-sm py-[10px] px-[18px] text-semibold text-base text-gray-700 bg-white border border-gray-300 rounded-lg flex-1" onClick={() => deleteTodo(selectedTodo)}>
                        Delete
                    </button>
                    <button type="button" className="flex-center shadow-sm py-[10px] px-[18px] text-semibold text-base text-white bg-blue-pry border border-blue-pry rounded-lg flex-1" onClick={() => setSideBarModal("edit")}>
                        Edit
                    </button>
                </div>
            </div>
        </div>

    )
}
