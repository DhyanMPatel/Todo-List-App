import React from 'react'

function DisplaytodoList(props) {
    return (
            <span className='flex-container'>
                <li className='list-item'>
                    {props.item}
                    {/* <button className = 'edit-btn'>Edit</button> */}
            <button className='dis-btn' onClick={(e) => props.deleteItem(props.index)} >Delete</button>
                </li>
            </span>
    )
}

export default DisplaytodoList