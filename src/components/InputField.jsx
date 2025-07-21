import React from 'react'

const InputField = (props) => {
    return (
        <div className='mb-2'>
            <label className='form-text'>{props.label}</label>
            <input type='number' className='form-control' value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default InputField