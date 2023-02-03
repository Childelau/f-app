import { useState } from "react"

export default function StateArray() {
    return (
        <>
            <AddList />
            <RemovingList />
            <TransformingList />
            <ReplacingArray />
        </>
    )
}

let nextId = 0

function AddList() {
    const [name, setName] = useState('')
    const [artists, setArtists] = useState([])
    function handleClick() {
        // const nextArtists = artists.slice()
        // nextArtists.push({
        //     id: nextId++,
        //     name: name
        // })
        // setArtists(nextArtists)
        setArtists([
            ...artists,
            {id: nextId++, name: name}
        ])
        setName('')

    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={handleClick}>Add</button>
            <ul>
                {
                    artists.map(artist => (<li key={artist.id}>{artist.name}</li>))
                }
            </ul>
        </>
    )
}

//Removing from an array
let removingArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'}
]
function RemovingList() {
    const [artists, setArtists] = useState(removingArtists)
    return (
        <>
            <h1>Removing Artists:</h1>
            <ul>
                {
                    artists.map(artist => (
                        <li key={artist.id}>
                            {artist.name}{' '}
                            <button onClick={() => {
                                setArtists(
                                    artists.filter(a => a.id !== artist.id)
                                )
                            }}>Delete</button>
                        </li>

                    ))
                }
            </ul>
        </>
    )
}

//Transforming an array
let transformingShapes = [
    { id: 0, type: 'circle', x: 50, y: 200 },
    { id: 1, type: 'square', x: 150, y: 200 },
    { id: 2, type: 'circle', x: 250, y: 200 }
]

function TransformingList() {
    const [shapes, setShapes] = useState(transformingShapes)
    function handleClick() {
        setShapes(
            shapes.map(shape => {
                if (shape.type === 'square') {
                    return shape
                } else {
                    return {
                        ...shape,
                        y: shape.y + 20
                    }                    
                }
            })   
        )
    }
    return (
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div key={shape.id} 
                     style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                        shape.type === 'circle'
                            ? '50%' : '',
                        width: 20,
                        height: 20,
                }}>{}</div>
            ))}
        </>
    )
}

//Replacing items in an array
let replacingArray = [
    0, 0, 0
  ];
function ReplacingArray() {
    const [counters, setCounters] = useState(replacingArray)
    function handleClick(index) {
        // let nextCounters = [...counters]
        // counters.map((counter, i) => {
        //     if (index === i) {
        //         counter++
        //         nextCounters[i] = counter
        //     }
        // })
        const nextCounters = counters.map((c, i) => {
            if (i === index) {
                return c + 1
            } else {
                return c
            }
        })
        setCounters(nextCounters)
    }
    return (
        <ul>
            {counters.map((counter, index) => (
                <li key={index}>
                    {counter}
                    <button onClick={() => handleClick(index)}>+1</button>
                </li>

            ))

            }
        </ul>
        
    )
}
