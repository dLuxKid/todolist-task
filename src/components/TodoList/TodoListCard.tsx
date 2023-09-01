
interface Props {
    id: number;
    title: string;
    completed: boolean;
    toggleTodo: (id: number, complete: boolean) => void;
}

export default function TodoListCard({
    title,
    id,
    completed,
    toggleTodo, }: Props) {
    return (
        <li className="px-6 py-4 flex-between bg-gray-50 hover:bg-gray-200 border-b border-b-gray-200 duration-200 ease-out transition-all">
            <div className="flex gap-3 items-center">
                <input
                    id={id.toLocaleString()}
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={completed}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <label
                    htmlFor={id.toLocaleString()}
                    className="peer-checked:line-through peer-checked:text-gray-300 flex-start flex-col"
                >
                    <span className="cursor-pointer text-sm font-medium text-gray-900">
                        {title}
                    </span>
                    <span className="cursor-pointer text-sm font-normal text-gray-600">
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
