import React from 'react'


// -----------------the input tag is used multiple time, so here is the resuable component that we can modify accordingly------------------------
const InputCustom = ({title, type, placeholder, handleChange,name }) => {
    return (
        <div>
            <label>
                {title}
                <input
                    type={type}
                    placeholder={placeholder}
                    required
                    name={name}
                    onChange={handleChange}
                />
            </label>
        </div>
    )
}

export default InputCustom