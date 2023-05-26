import React from 'react'

export default function TimeSlot() {

    // duelly linked list for time slots?

    const times = [
        '5 AM',
        '5:30 AM',
        '6 AM',
        '6:30 AM',
        '7 AM',
        '7:30 AM',
        '8 AM',
        '8:30 AM',
        '9 AM',
        '9:30 AM',
        '10 AM',
        '10:30 AM',
        '11 AM',
        '11:30 AM',
        '12 PM',
        '12:30 PM',
        '1 PM',
        '1:30 PM',
        '2 PM',
        '2:30 PM',
        '3 PM',
        '3:30 PM',
        '4 PM',
        '4:30 PM',
        '5 PM',
        '5:30 PM',
        '6 PM',
        '6:30 PM',
        '7 PM',
        '7:30 PM',
        '8 PM',
        '8:30 PM',
        '9 PM',
        '9:30 PM',
        '10 PM',
        '10:30 PM',
        '11 PM',
        '11:30 PM',
        '12:00 AM',
        '12:30 AM',
        '1 AM',
        '1:30 AM',
        '2 AM',
        // '2:30 AM',
        // '3 AM',
        // '3:30 AM',
        // '4 AM',
        // '4:30 AM',
    ]

  return (
    <div className=' flex flex-col mt-[.5vmin] w-[10.5vw] h-[81.5vh] rounded-[1vmin]'>
      {/*{times.map((time, idx) => <TimeSlot time={time} key={idx} />)} */}
    </div>
  )
}
