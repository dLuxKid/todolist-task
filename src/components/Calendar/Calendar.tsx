import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar() {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
            className='w-full bg-white'
            calendarClassName='text-gray-700 shadow-lg bg-white'
        />

    );
}
