import React from 'react'
import AddTask from './AddTask.jsx'
import Task from './Task.jsx'
const TaskManager = () => {
    return (
        <>
            <AddTask />
            <ul className='gap-2'>
                <Task />
                <Task />
                <Task />

            </ul>
        </>
    )
}

export default TaskManager