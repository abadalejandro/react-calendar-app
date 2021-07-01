// import ReactDOM from 'react-dom';
// @ts-ignore
// import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';

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

const CalendarModal = () => {

    const closeModal = () => {
        console.log('closing');
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
            <form className="container">

                <div className="form-group">
                    <label>Start date and time</label>
                    <input className="form-control" placeholder="Fecha inicio" />
                </div>

                <div className="form-group">
                    <label>End date and time</label>
                    <input className="form-control" placeholder="Fecha inicio" />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
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