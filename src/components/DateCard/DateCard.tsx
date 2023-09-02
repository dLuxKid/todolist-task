

export default function DateCard({ date }: { date: { date: number; day: string } }) {
    return (
        <div className={`w-[62px] py-[10px] px-4 flex-center flex-col gap-2 rounded-lg shadow border ${new Date().getDate() === date.date ? 'border-blue-pry bg-blue-pry text-white' : "border-gray-300 bg-white text-gray-700"}`}>
            <p className="text-xs md:text-sm font-semibold">{date.day}</p>
            <p className="text-xs md:text-sm font-semibold">{date.date}</p>
        </div >
    )
}
