import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return (
        <div className='px-6 py-5'>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
                className='w-full max-w-[400px] bg-white'
                calendarClassName='text-gray-700 shadow-md bg-white'
            />
        </div>

    );
}
