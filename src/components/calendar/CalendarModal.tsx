// import ReactDOM from 'react-dom';
// @ts-ignore
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootReducer } from '../../redux/store';
import { uiCloseModal } from '../../redux/actions/uiActions';
import { eventStartAddNew, eventClearActiveEvent, eventUpdated } from '../../redux/actions/eventActions';
import { IEvent } from '../../redux/reducers/calendarReducer';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const anotherHour = now.clone().add(1, 'hours');

const initialState: IEvent = {
    id: null,
    title: '',
    notes: '',
    start: now.toDate(),
    end: anotherHour.toDate(),
}

const CalendarModal = () => {
    const dispatch = useDispatch();
    const { modalOpen } = useSelector((state: IRootReducer) => state.ui);
    const { activeEvent } = useSelector((state: IRootReducer) => state.calendar);

    const [startDateState, setStartDateState] = useState(now.toDate());
    const [endDateState, setEndDateState] = useState(anotherHour.toDate());
    const [validTitleState, setValidTitleState] = useState<boolean>(true);
    const [formValuesState, setFormValuesState] = useState<IEvent>(initialState);

    const { notes, title } = formValuesState;


    useEffect(() => {
        if (activeEvent) {
            setFormValuesState(activeEvent);
        }else{
            setFormValuesState(initialState);
        }


    }, [activeEvent, setFormValuesState]);



    const handleInputChange = ({ target }: any) => {
        setFormValuesState({
            ...formValuesState,
            [target.name]: target.value,
        });
    }

    const closeModal = () => {
        dispatch(uiCloseModal());
        setFormValuesState(initialState);
        dispatch(eventClearActiveEvent());
    }

    const handleStartDateChange = (e: any) => {
        setStartDateState(e);
        setFormValuesState({
            ...formValuesState,
            start: e,
        });
    }
    const handleEndDateChange = (e: any) => {
        setEndDateState(e);
        setFormValuesState({
            ...formValuesState,
            end: e,
        });
    }

    const handleSubmitForm = async (e: any) => {
        e.preventDefault();
        const momentStart = moment(startDateState);
        const momentEnd = moment(endDateState);

        if (momentStart.isSameOrAfter(momentEnd)) {
            return await Swal.fire('Error', 'End date must be grater than Start date', 'error');
        }

        if (title.trim().length < 2) {
            return setValidTitleState(false);
        }

        if (activeEvent) {
            dispatch(eventUpdated(formValuesState))
        } else {
            dispatch(eventStartAddNew(formValuesState));
        }
        // TODO save info in db
        setValidTitleState(true);
        closeModal();

    }


    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-background"
        >
            <h1> {(activeEvent)? 'Edit event': 'New event'}</h1>
            <hr />
            <form
                className="container"
                onSubmit={handleSubmitForm}
            >
                <div className="form-group">
                    <label>Start date and time</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={startDateState}
                        className="form-control"
                        format="y-MM-dd hh:mm a"
                        amPmArialLabel="Select AM/PM"
                    />
                </div>

                <div className="form-group">
                    <label>End date and time</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={endDateState}
                        minDate={startDateState}
                        className="form-control"
                        format="y-MM-dd hh:mm a"
                        amPmArialLabel="Select AM/PM"
                    />
                </div>
                <hr />
                <div className="form-group">
                    <label>Title and Notes</label>
                    <input
                        type="text"
                        className={`form-control ${!validTitleState && 'is-invalid'}`}
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea
                        // type="text"
                        className="form-control"
                        placeholder="Notas"
                        // rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
export default CalendarModal;