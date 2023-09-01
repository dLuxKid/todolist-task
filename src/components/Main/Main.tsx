
// react
import { useEffect, useState } from 'react';
// data
import { monthNames, september2023Dates } from "../../data/Date";
// components

import Calendar from '../Calendar/Calendar';
import DateCard from "../DateCard/DateCard";
import Todos from '../TodoList/Todos';
import Pagination from '../Pagination/Pagination';


export type TodosType = Array<{
    userId: number
    id: number,
    title: string,
    completed: boolean
}>

export default function Main() {

    const [todos, setTodos] = useState<TodosType>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        (async function () {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
                const data = await response.json();
                setTodos(data);
                setTotalPages(Math.ceil(data.length / 7));
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setTodos([]);
                setLoading(false);
            }
        })();
    }, [])

    const startIndex = currentPage * 7;
    const endIndex = startIndex + 7;
    const subset = todos.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage: any) => {
        setCurrentPage(selectedPage.selected);
    };


    const toggleTodo = (id: number, completed: boolean) => { }


    return (
        <main className="px-[3.125rem] pt-12 pb-24 h-full w-full">

            <div className="w-full h-full flex-center flex-col gap-8">
                <div className="flex-between w-full px-8">
                    <div>
                        <h1 className="text-gray-900 leading-[2.375rem] font-semibold text-[1.875rem]">Good Morning!</h1>
                        <p className="text-gray-600 text-base font-normal">you have some tasks to do</p>
                    </div>
                    <div>
                        <button className="py-[10px] px-4 flex-center gap-2 bg-blue-pry border border-blue-pry rounded-lg">
                            <span className="w-5 h-5">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0001 4.16666V15.8333M4.16675 9.99999H15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="font-semibold text-sm text-white">Create New Task</span>
                        </button>
                    </div>
                </div>

                <div className='flex gap-4 w-full'>
                    <div className="px-8 flex flex-col gap-8 md:w-3/4">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-base text-gray-900 font-semibold">{monthNames[new Date().getMonth()]}{" "}{new Date().getFullYear()}</h1>
                            <div className="flex gap-4 overflow-x-scroll">
                                {september2023Dates.map((date, i) => <DateCard key={i} date={date} />)}
                            </div>
                        </div>
                        {/* todos */}
                        <Todos todos={subset} loading={loading} error={error} toggleTodo={toggleTodo} />
                        {/* pagination */}
                        <Pagination totalPages={totalPages} handlePageChange={handlePageChange} />
                    </div>
                    <div className="pl-6 border-l border-l-gray-200">
                        {/* TODO: style calender */}
                        <Calendar />
                    </div>
                </div>
            </div>
        </main>
    )
}
