import React from 'react'

const CalendarEvent = ({event}:any) => {
    const {title, user} = event;

    // console.log(event);
    return (
        <div>
          <strong>{title}</strong> 
          <span> - {user.name}</span>
        </div>
    )
}

export default CalendarEvent;
