import React from 'react'

const AddTask = () => {
    return (
        <div className='flex flex-row justify-center items-end gap-2 m-2'>
            <input className='border border-gray-300 rounded-md p-2' type="text" placeholder='Task Name' />
            <input className='border border-gray-300 rounded-md p-2' type="text" placeholder='Task Description' />
            <span className='bg-blue-500 text-white p-2 rounded-md'>Add Task</span>
        </div>
    )
}

export default AddTask