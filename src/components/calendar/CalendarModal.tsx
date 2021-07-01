// import ReactDOM from 'react-dom';
// @ts-ignore
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import moment from 'moment';
import { useState } from 'react';

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

interface IForm {
    title: string;
    notes: string;
    start: Date;
    end: Date;
}

const initialState: IForm = {
    title: 'Event',
    notes: '',
    start: now.toDate(),
    end: anotherHour.toDate(),
}

const CalendarModal = () => {

    const [startDateState, setStartDateState] = useState(now.toDate());
    const [endDateState, setEndDateState] = useState(anotherHour.toDate());
    const [formValuesState, setFormValuesState] = useState<IForm>(initialState);

    const { notes, title, start, end } = formValuesState;

    const handleInputChange = ({ target }: any) => {
        setFormValuesState({
            ...formValuesState,
            [target.name]: target.value,
        });
    }

    const closeModal = () => {
        console.log('closing');
    }

    const handleStartDateChange = (e: any) => {
        console.log(e);
        setStartDateState(e);
        setFormValuesState({
            ...formValuesState,
            start: e,
        });
    }
    const handleEndDateChange = (e: any) => {
        console.log(e);
        setEndDateState(e);
        setFormValuesState({
            ...formValuesState,
            end: e,
        });
    }

    const handleSubmitForm = (e:any) => {
        e.preventDefault();
        const momentStart = moment(start);
        const momentEnd = moment(end);

        if(momentStart.isSameOrAfter(momentEnd)){
            console.log('End date must be greater');
            return;
        }

        console.log(formValuesState);
    }

    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-background"
        >
            <h1> New event </h1>
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
                        className="form-control"
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