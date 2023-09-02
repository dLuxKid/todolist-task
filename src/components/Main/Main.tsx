// react
import { useEffect, useState } from 'react';
// data
import { monthNames, september2023Dates } from "../../data/Date";
// components
import DateCard from "../DateCard/DateCard";
import Todos from '../TodoList/Todos';
import Pagination from '../Pagination/Pagination';
import AddTodo from '../AddTodo/AddTodo';
import AboutTodo from '../AboutTodo/AboutTodo';
import EditTodo from '../EditTodo/EditTodo';
import CalendarModal from '../Calendar/Calendar';
import MobileSearchBar from '../MobileSearchBar/MobileSearchBar';


export type TodosType = {
    userId: number
    id: number,
    title: string,
    completed: boolean
}

export default function Main() {

    const [todos, setTodos] = useState<TodosType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [sideBarModal, setSideBarModal] = useState<'' | 'about' | 'add' | 'edit'>('')

    const [selectedTodo, setSelectedTodo] = useState<TodosType | null>(null)

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


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    const startIndex = currentPage * 7;
    const endIndex = startIndex + 7;
    const subset = todos.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage: any) => {
        setCurrentPage(selectedPage.selected);
    };

    // TODO FUNCTIONS
    const toggleTodo = async (item: TodosType) => {
        setLoading(true);
        const newTodos = todos.map(todo => todo.id === item.id ? {
            ...item,
            completed: !item.completed,
        } : todo)
        setTodos(newTodos);
        setLoading(false);
    }

    const addTodo = async (text: string) => {
        setLoading(true);
        const newTodos = todos.concat({
            title: text,
            completed: false,
            userId: 1,
            id: todos[todos.length - 1].id + 1
        })
        setTodos(newTodos);
        setTotalPages(Math.ceil(newTodos.length / 7));
        setLoading(false);
    }

    const deleteTodo = async (todo: TodosType) => {
        setLoading(true);
        const newTodos = todos.filter(item => item.id !== todo.id)
        setTodos(newTodos);
        setTotalPages(Math.ceil(newTodos.length / 7));
        setLoading(false);
        setSideBarModal('')
    }

    const editTodo = async (item: TodosType) => {
        setLoading(true);
        const newTodos = todos.map(todo => todo.id === item.id ? {
            ...item,
            title: item.title,
            completed: false
        } : todo)
        setTodos(newTodos);
        setLoading(false);
        setSideBarModal('')
    }


    return (
        <main className="big:px-[3.125rem] pt-8 md:pt-12 pb-12 md:pb-24 h-full w-full">
            <div className="w-full h-full flex-center flex-col gap-8">
                <div className="flex-between w-full px-4 md:px-8">
                    <div>
                        <h1 className="text-gray-900 leading-8 md:leading-[2.375rem] font-semibold text-2xl md:text-[1.875rem]">Good Morning!</h1>
                        <p className="text-gray-600 text-base font-normal">you have some tasks to do</p>
                    </div>
                    <div className='hidden md:block'>
                        <button type='button' onClick={() => setSideBarModal('add')} className="py-[10px] px-4 flex-center gap-2 bg-blue-pry border border-blue-pry rounded-lg">
                            <span className="w-5 h-5">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0001 4.16666V15.8333M4.16675 9.99999H15.8334" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <span className="font-semibold text-sm text-white">Create New Task</span>
                        </button>
                    </div>
                </div>

                <div className='flex gap-4 w-full max-w-6xl'>
                    <div className="px-4 md:px-8 flex flex-col gap-8 w-full md:w-[55%] big:w-2/3">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-[12.741px] md:text-base text-gray-900 font-semibold">{monthNames[new Date().getMonth()]}{" "}{new Date().getFullYear()}</h1>
                            <div className="flex gap-4 overflow-x-scroll">
                                {september2023Dates.map((date, i) => <DateCard key={i} date={date} />)}
                            </div>
                        </div>
                        {/* todos */}
                        <Todos
                            todos={subset}
                            loading={loading}
                            error={error}
                            toggleTodo={toggleTodo}
                            setSelectedTodo={setSelectedTodo}
                            setSideBarModal={setSideBarModal}
                        />
                        {/* pagination */}
                        <Pagination totalPages={totalPages} handlePageChange={handlePageChange} />
                    </div>
                    {/* desktop sidebar */}
                    {
                        screenWidth > 768 &&
                        <div className='md:pl-6 md:border-l md:border-l-gray-200 flex-start md:w-[45%] big:w-1/3'>
                            {!sideBarModal && <CalendarModal />}
                            {sideBarModal === 'add' && <AddTodo
                                addTodo={addTodo}
                                setSideBarModal={setSideBarModal}
                            />}
                            {sideBarModal === 'about' && <AboutTodo
                                selectedTodo={selectedTodo as TodosType}
                                deleteTodo={deleteTodo}
                                setSideBarModal={setSideBarModal}
                            />}
                            {sideBarModal === 'edit' && <EditTodo
                                editTodo={editTodo}
                                setSideBarModal={setSideBarModal}
                                selectedTodo={selectedTodo as TodosType}
                            />}
                        </div>
                    }

                    {screenWidth < 768 && sideBarModal &&
                        <div className='w-full fixed top-0 left-0 bottom-0 right-0'>
                            <div className='absolute bg-black opacity-80 top-0 right-0 left-0 bottom-0 z-10' />
                            <div className='z-50 absolute bottom-0 left-0 right-0 w-full'>
                                {sideBarModal === 'add' && <AddTodo
                                    addTodo={addTodo}
                                    setSideBarModal={setSideBarModal}
                                />}
                            </div>
                            <div className='z-50 absolute bottom-0 left-0 right-0 w-full'>
                                {sideBarModal === 'about' && <AboutTodo
                                    selectedTodo={selectedTodo as TodosType}
                                    deleteTodo={deleteTodo}
                                    setSideBarModal={setSideBarModal}
                                />}
                            </div>
                            <div className='z-50 absolute bottom-0 left-0 right-0 w-full'>
                                {sideBarModal === 'edit' && <EditTodo
                                    editTodo={editTodo}
                                    setSideBarModal={setSideBarModal}
                                    selectedTodo={selectedTodo as TodosType}
                                />}
                            </div>
                        </div>
                    }
                    {screenWidth < 768 && !sideBarModal && <MobileSearchBar setSideBarModal={setSideBarModal} />}
                </div>
            </div>
        </main>
    )
}
