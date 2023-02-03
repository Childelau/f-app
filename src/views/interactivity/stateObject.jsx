import { useState } from "react"
import { useImmer } from "use-immer"

export default function StateObject() {
    return (
        <>
            <MovingDot />
            <hr />
            <Form />
            <Form1 />

        </>
    )
}


function MovingDot() {
    const [positon, setPosition] = useState({x: 0 ,y: 0})
    return (
        <div style={{position: 'relative', width: '100px', height: '100px', backgroundColor: 'steelblue'}}
            onPointerMove = {e => {
                if (e.clientX < 100 && e.clientY < 100) {
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    })
                }
                
                
            }}>
            <div style={{position: 'absolute', backgroundColor: 'red',
            borderRadius: '50%', width: 20, height: 20, left: -10, top: -10,
            transform: `translate(${positon.x}px, ${positon.y}px)`}}></div>
        </div>
    )
}



function Form() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    })
    

    function handleFirstNameChange(e) {
        // const nextPerson = person
        // nextPerson.firstName = e.target.value
        // setPerson({...nextPerson})
        setPerson({
            ...person,
            firstName: e.target.value
        })
    }
    function handleLastNameChange(e) {
        const nextPerson = person
        nextPerson.lastName = e.target.value
        setPerson({...nextPerson})
    }
    function handleEmailChange(e) {
        const nextPerson = person
        nextPerson.email = e.target.value
        setPerson({...nextPerson})
    }
    return (
        <>
            <label>First name:</label>
            <input value={person.firstName}  onChange={handleFirstNameChange} />
            <label>Last name:</label>
            <input value={person.lastName} onChange={handleLastNameChange} />
            <label>Email:</label>
            <input value={person.email} onChange={handleEmailChange} />

            <p>
                {person.firstName} {' '}
                {person.lastName} {' '}
                ({person.email})
            </p>
        </>
    )
}

function Form1() {
    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
        title: 'Blue Nana',
        city: 'Hamburg',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })
    function handleNameChange(e) {
        updatePerson(person => {
            person.name = e.target.value
        })
    }
    function handleTitleChange(e) {
        updatePerson(person => {
            person.artwork.title = e.target.value
        })
    }
    function handleCityChange(e) {
        updatePerson(person => {
            person.artwork.city = e.target.value
        })
    }
    function handleImageChange(e) {
        updatePerson(person => {
            person.artwork.image = e.target.value
        })
    }

    return (
        <>
            <label>Name:</label>
            <input value={person.name}  onChange={handleNameChange} />
            <label>Title:</label>
            <input value={person.artwork.title} onChange={handleTitleChange} />
            <label>City:</label>
            <input value={person.artwork.city} onChange={handleCityChange} />
            <label>Image:</label>
            <input value={person.artwork.image} onChange={handleImageChange} />

            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name} {'<br />'}
                (located in {person.artwork.city})
                <img src={person.artwork.image} alt={person.artwork.title} />
            </p>
        </>
    )
}














