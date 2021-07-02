

import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../redux/actions/uiActions';
import { eventClearActiveEvent } from '../../redux/actions/eventActions';

const AddNewFab = () => {
    const dispatch = useDispatch();

    const handleOnClick = (e: any) => {
        // dispatch(eventClearActiveEvent);
        dispatch(eventClearActiveEvent());
        dispatch(uiOpenModal());

    }

    return (
        <button
            onClick={handleOnClick}
            className="btn btn-primary fab"
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}


export default AddNewFab;