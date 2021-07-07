import moment from "moment";
import { IEvent } from "../redux/reducers/calendarReducer";

export const prepareEvents = (events:IEvent[]) => {
    
    return events.map((e)=> ({
        ...e,
        start: moment(e.start).toDate(),
        end: moment(e.end).toDate(),
    }));
}