

import React from 'react'
import { useDispatch } from 'react-redux';
import { eventStartDelete } from '../../redux/actions/eventActions';

const DeleteEventFab = () => {
    const dispatch = useDispatch();

    const handleOnClick = (e: any) => {
        dispatch(eventStartDelete());
    }

    return (
        <button
            onClick={handleOnClick}
            className="btn btn-danger fab-danger"
        >
            <i className="fas fa-trash"></i>
           
            <span> Delete Event</span>
        </button>
    )
}


export default DeleteEventFab;