import { useReducer, useState } from "react"

export default function Reducer() {
    return (
        <>
            <TaskApp />
        </>
    )
}

function TaskApp() {
    // const [tasks, setTasks] = useState(initialTasks)
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    // function handleAddTask(text) {
    //     setTasks([
    //         ...tasks,
    //         {
    //             id: nextId++,
    //             text: text,
    //             done: false
    //         }
    //     ])
    // }

    // function handleChangeTask(task) {
    //     setTasks(
    //         tasks.map(t => {
    //             if (t.id === task.id) {
    //                 return task
    //             } else {
    //                 return t                    
    //             }
    //         })
    //     )
    // }

    // function handleDeleteTask(taskId) {
    //     setTasks(tasks.filter(t => t.id !== taskId))
    // }

    function handleAddTask(text) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
            done: false
        })
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        })
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        })
    }
   




    return (
        <>
            <h1>Prague itinerary</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
        </>
    )
}
/**
 * @reducer
 */
 function tasksReducer(tasks, action) {
    if (action.type === 'added') {
        return [
            ...tasks,
            {
                id: action.id,
                text: action.text,
                done: action.done
            }
        ] 
    } else if (action.type === 'changed') {
        return tasks.map( t => {
            if (t.id === action.task.id) {
                return action.task
            } else {
                return t
            }
        })
    } else if (action.type === 'deleted') {
        return tasks.filter(t => t.id !== action.id)
    } else {
        throw Error('Unknown action: ' + action.type)
    }
}




function TaskList({tasks, onChangeTask, onDeleteTask}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}/>
                </li>
            ))}
        </ul>
    )
}

function Task({task, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false)
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input value={task.text} onChange={e => {
                    onChange({
                        ...task,
                        text: e.target.value
                    })
                }}/>
                <button onClick={() => setIsEditing(false)}>Save</button>

            </>
        )
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return (
        <label>
            <input type="checkbox" checked={task.checked} onChange={e => {
                onChange({
                    ...task,
                    done: e.target.checked
                })
            }} />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </label>
    )

}



function AddTask({onAddTask}) {
    const [text, setText] = useState('')
    return (
        <>
            <input type="text" placeholder="Add task" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => {
                setText('')
                onAddTask(text)}}>Add</button>
        </>
    )
}
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
]
