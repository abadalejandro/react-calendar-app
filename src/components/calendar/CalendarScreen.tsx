import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useEffect, useState } from 'react'
import Navbar from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import CalendarEvent from './CalendarEvent';

import 'moment/locale/es';
import CalendarModal from './CalendarModal';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../redux/actions/uiActions';
import { eventSetActiveEvent, eventClearActiveEvent, eventStartLoading } from '../../redux/actions/eventActions';
import { IEvent } from '../../redux/reducers/calendarReducer';
import AddNewFab from '../ui/AddNewFab';
import { IRootReducer } from '../../redux/store';
import DeleteFab from '../ui/DeleteEventFab';
moment.locale('es');



const localizer = momentLocalizer(moment);

const CalendarScreen = () => {
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector((state: IRootReducer) => state.calendar);
    const { uid } = useSelector((state:IRootReducer) => state.auth);
    const [lastVieState, setLastVieState] = useState<any>(localStorage.getItem('lastView') || 'month');
    useEffect(() => {
        dispatch(eventStartLoading());
        
    }, [dispatch]);

   
    const onDoubleClick = (e: any) => {
        dispatch(uiOpenModal());
    }

    const onSelectEvent = (e: IEvent) => {
        dispatch(eventSetActiveEvent(e));
    }

    const onViewChange = (e: any) => {
        setLastVieState(e);
        localStorage.setItem('lastView', e);
    }

   

    const eventStyleGetter = (event: IEvent, start: any, end: any, isSelected: boolean) => {

        const style = {
            // backgroundColor:  '#f7a336',
            backgroundColor: (uid === event.user?._id) ? '#367cf7' : '#465660',
            borderRadius: '0px',
            opacity: .8,
            display: 'block',
            color: 'white'
    
        };
        return {
            className: 'ale',
            style: style
        }
    }

    const onSelectSlot = (e:any) => {
        dispatch(eventClearActiveEvent());
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
                onSelectSlot={onSelectSlot}
                selectable={true}
                eventPropGetter={eventStyleGetter}
                messages={messages}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                components={{
                    event: CalendarEvent
                }}
            />
            <AddNewFab />
            {
                (activeEvent) && <DeleteFab />
            }
            <CalendarModal />
        </div>
    )
}

export default CalendarScreen;
