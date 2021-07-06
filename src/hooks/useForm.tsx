import { useState, ChangeEvent } from 'react';



export const useForm = <T extends Object>(initialState: T):any => {

    const [form, setForm] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setForm(newFormState);
    }

    const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLFormElement>):void => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        });

    }

    return [form, handleInputChange, reset];

}

export default useForm;