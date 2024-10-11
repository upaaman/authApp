import React from 'react'


// ----------------this button is used in more than one place---------------------
const CommanButton = ({title}) => {
    return (
        <button type="submit" className="comman-button">{title}</button>
    )
}

export default CommanButton