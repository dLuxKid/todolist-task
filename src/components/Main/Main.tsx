
// react
import { useState, useEffect, useMemo } from 'react'
// data
import { monthNames, september2023Dates } from "../../data/Date";
// components
import DateCard from "../DateCard/DateCard";
import Loader from '../Loader/Loader';
import TodoListCard from '../TodoListCard/TodoListCard';
import ReactPaginate from 'react-paginate';


type Todos = Array<{
    userId: number
    id: number,
    title: string,
    completed: boolean
}>

export default function Main() {

    const [todos, setTodos] = useState<Todos>([])
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
                <div className="px-8 w-full flex flex-col gap-8">
                    <div className="w-full flex flex-col gap-4">
                        <h1 className="text-base text-gray-900 font-semibold">{monthNames[new Date().getMonth()]}{" "}{new Date().getFullYear()}</h1>
                        <div className="flex gap-4 overflow-scroll">
                            {september2023Dates.map((date, i) => <DateCard key={i} date={date} />)}
                        </div>
                    </div>
                    {/* todos */}
                    <div className="flex flex-col gap-4 w-full">
                        <h1 className="text-base font-semibold text-gray-900">Tasks</h1>
                        {loading && <Loader />}
                        {error && <p className='text-center w-full items-center text-base font-semibold text-red-600'>{error}</p>}
                        <ul className="w-full flex flex-col gap-4">
                            {
                                subset.map(todo => <TodoListCard key={todo.id} {...todo} toggleTodo={toggleTodo} />)
                            }
                        </ul>

                    </div>
                    {/* pagination */}
                    <div className='pt-5 w-full border-t border-t-gray-200 flex-center'>
                        <ReactPaginate
                            pageCount={totalPages}
                            onPageChange={handlePageChange}
                            forcePage={currentPage}
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            breakLabel={"..."}
                            containerClassName={"flex items-center gap-1 text-base font-semibold text-gray-900 w-full"}
                            activeClassName={"rounded-full bg-gray-50 h-10 w-10 flex-center"}
                            pageClassName='h-10 w-10 flex-center'
                            previousClassName={'mr-auto'}
                            nextClassName={'ml-auto'}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
