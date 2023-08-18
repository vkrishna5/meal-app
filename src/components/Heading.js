import React from 'react'

const Heading = (props) => {
    let title = props.title
    return (
        <>
            <h1 className='display-2 py-3'>{title}</h1>
            <hr className='pb-2' />
        </>
    )
}

export default Heading