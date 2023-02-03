import { useState } from "react"

export default function StateSnapshot() {
    return (
        <>
            <Form />
            <hr />
            <TrafficLight />
        </>
    )
}


function Form() {
    const [to, setTo] = useState('Alice')
    const [message, setMessage] = useState('Hello')

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(() => {
            alert(`You said ${message} to ${to}`)
        }, 3000)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>To:{' '}</label>
            <select value={to} onChange={e => setTo(e.target.value)}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
            </select>
            <textarea placeholder="Message" value={message} onChange={e => {
                setMessage(e.target.value)
            }}></textarea>
            <button type="submit">Send</button>
        </form>
    )
}




function TrafficLight() {
    const [walk, setWalk] = useState(true)
    function handleClick() {
       
        setWalk(!walk)
        if (walk) {
            alert('Stop is next')
        } else {
            alert('Walk is next')
        }

    }
    return (
        <>
            <button onClick={handleClick}>
                Change to {walk? 'Stop': 'Walk'}
            </button>
            <h1 style={{color: walk? 'darkgreen': 'darkred'}}>
                {walk? 'Walk': 'Stop'}
            </h1>
        </>
    )


}

