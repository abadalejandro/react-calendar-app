import React from 'react'

const CalendarEvent = ({event}:any) => {
    const {title, user} = event;

    return (
        <div>
          <strong>{title}</strong> 
          <span> - {user.name}</span>
        </div>
    )
}

export default CalendarEvent;
