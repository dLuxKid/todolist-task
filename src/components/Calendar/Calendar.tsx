// react
import { useState } from 'react'
// react-calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarModal() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <Calendar
            onChange={onChange}
            value={value}
            tileClassName={({ date }) =>

                date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()
                    ?
                    'flex-center text-white bg-blue-pry hover:bg-blue-pry h-10 w-10 rounded-full duration-300'
                    :
                    'text-gray-700 hover:bg-gray-100 duration-300 h-10 w-10 rounded-full flex-center'

            }
            className={'max-w-[24.625rem] px-6 py-5 border border-gray-200 rounded-lg shadow-md hidden md:block'}
        />
    );
}
