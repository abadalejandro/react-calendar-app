import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useState } from 'react'
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import CalendarEvent from './CalendarEvent';

import 'moment/locale/es';
import CalendarModal from './CalendarModal';
moment.locale('es');

const localizer = momentLocalizer(moment);
const events = [{
    title: 'Birthdate of cheff',
    start: moment().toDate(),
    end: moment().add(2, 'hour').toDate(),
    bgcolor: '#fafafa',
    allDay: false,
    notes: 'Comprar la comida jaa fas lad falfajfasdfsfaf asfasf',
    user: {
        _id: '123',
        name: 'Alejandro'
    }
}]

const CalendarScreen = () => {

    const [lastVieState, setLastVieState] = useState<any>(localStorage.getItem('lastView') || 'month' );

    const style = {
        // backgroundColor: '#f7a336',
        backgroundColor: '#367cf7',
        borderRadius: '0px',
        opacity: .8,
        display: 'block',
        color: 'white'

    }

    const onDoubleClick = (e: any) => {
        console.log(e);
        console.log('double click')
    }
    const onSelectEvent = (e: any) => {
        console.log(e);
        console.log('selected')
    }

    const onViewChange = (e: any) => {
        // console.log('onViewChange', e)
        setLastVieState(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event: Object, start: any, end: any, isSelected: boolean) => {
        // console.log(event)
        return {
            className: 'ale',
            style: style
        }
    }



    return (
        <div className="calendar-screen">
            <Navbar />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                popup={true}
                view={lastVieState}
                popupOffset={30}
                eventPropGetter={eventStyleGetter}
                messages={messages}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                components={{
                    event: CalendarEvent
                }}
            // onSelectEvent={(event: Object, e: SyntheticEvent) => {
            //     console.log({ event, e });
            //     // return style;

            //     console.log(e.currentTarget);
            // }
            // }

            // eventPropGetter={eventStyleGetter}
            // style={style}
            />

            <CalendarModal />
        </div>
    )
}

export default CalendarScreen;
