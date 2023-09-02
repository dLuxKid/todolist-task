import { Dispatch, SetStateAction } from "react"

interface Props {
    setSideBarModal: Dispatch<SetStateAction<"" | "about" | "add" | "edit">>
}

export default function MobileSearchBar({ setSideBarModal }: Props) {
    return (
        <div className="px-4 pb-8 w-full fixed bottom-0 shadow-sm cursor-pointer bg-white" onClick={() => setSideBarModal('add')}>
            <div className="flex-between gap-2 py-2 px-3 border border-gray-300 bg-gray-50 rounded-lg">
                <p className="text-base font-normal text-gray-600">Input task</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V5Z" fill="#3F5BF6" />
                    <path d="M19 10V12C19 15.866 15.866 19 12 19M5 10V12C5 15.866 8.13401 19 12 19M12 19V22M8 22H16M12 15C10.3431 15 9 13.6569 9 12V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V12C15 13.6569 13.6569 15 12 15Z" stroke="#3F5BF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}
