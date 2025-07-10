import React from 'react'

const Task = () => {
    return (
        <div className='flex flex-row justify-around items-center bg-gray-400 p-2 m-3'>
            <span className='text-lg font-bold border border-gray-300 rounded-md p-2'>Task Name</span>
            <span className='text-lg font-bold border border-gray-300 rounded-md p-2'>Task Description</span>
            <div>
                <input type="checkbox" id='task-status' />
                <label htmlFor='task-status'>Completed</label>
            </div>
            <div>
                <span className='bg-blue-500 text-white p-2 rounded-md cursor-pointer m-1'>Edit</span>
                <span className='bg-red-500 text-white p-2 rounded-md cursor-pointer'>Delete</span>
            </div>
        </div>

    )
}

export default Task