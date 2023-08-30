
export default function Main() {
    return (
        <main className="px-[3.125rem] pt-12 pb-24 h-full w-full">
            <div className="w-full h-full flex-center flex-col gap-8">
                <div className="flex-between w-full px-8">
                    <div>
                        <h1 className="text-black-pry leading-[2.375rem] font-semibold text-[1.875rem]">Good Morning!</h1>
                        <p className="text-black-pry text-base font-normal">you have some tasks to do</p>
                    </div>
                    <div>
                        <button className="py-[10px] px-4 flex-center gap-2 bg-blue-pry border border-blue-pry rounded-lg">
                            <span className="w-5 h-5">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0001 4.16666V15.8333M4.16675 9.99999H15.8334" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span className="font-semibold text-sm text-[#fff]">Create New Task</span>
                        </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}
