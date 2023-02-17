import { useState } from "react"
import './style.css'

export default function ResetState() {
    return (
        <>
            <Counters />
            <hr />
            <FancyCounter />
            <hr />
            <FancyCounter1 />
            <hr />
            <PersonCounter />
            <hr />
            <PersonCounter1 />
            <hr />
            <PersonCounter2 />
        </>
    )
}
function Counters() {
    const [showB, setShowB] = useState(true)
    return (
        <>
            <CounterItem />
            {showB && <CounterItem />}
            <label>
                <input type="checkbox" checked={showB} onChange={e => setShowB(e.target.checked)}/>
                Render the second counter
            </label>
            

        </>
    )
}

function FancyCounter() {
    const [isFancy, setIsFancy] = useState(false)
    return (
        <>
            {isFancy? <CounterItem isFancy={true}/>: <CounterItem isFancy={false} />}
            <label>
                <input type="checkbox" checked={isFancy} onChange={e => setIsFancy(e.target.checked)} />
                Use fancy styling
            </label>
        </>
    )

}

function FancyCounter1() {
    const [isFancy, setIsFancy] = useState(false)
    return (
        <>
            {isFancy? <div><CounterItem isFancy={true}/></div>: <section><CounterItem isFancy={false} /></section>}
            <label>
                <input type="checkbox" checked={isFancy} onChange={e => setIsFancy(e.target.checked)} />
                Use fancy styling
            </label>
        </>
    )

}

function PersonCounter() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
      <div>
            {isPlayerA ? (
            <CounterItem1 person="Taylor" />
            ) : (
            <CounterItem1 person="Sarah" />
            )}
            <button onClick={() => {
            setIsPlayerA(!isPlayerA);
            }}>
            Next player!
            </button>
        </div>
    );
}
//option1
function PersonCounter1() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
      <div>
            {isPlayerA && <CounterItem1 person="Taylor" /> } 
            {!isPlayerA && <CounterItem1 person="Sarah" /> }
            <button onClick={() => {
                setIsPlayerA(!isPlayerA);
            }}>
            Next player!
            </button>
        </div>
    );
}
//option2
function PersonCounter2() {
    const [isPlayerA, setIsPlayerA] = useState(true);
    return (
      <div>
            {isPlayerA ? (
                <CounterItem1 key="Taylor" person="Taylor" />
            ) : (
                <CounterItem1 key="Sarah" person="Sarah" />
            )}
            <button onClick={() => {
            setIsPlayerA(!isPlayerA);
            }}>
            Next player!
            </button>
        </div>
    );
}



function CounterItem({isFancy}) {
    const [score, setScore] = useState(0)
    const [hover, setHover] = useState(false)
    let className = 'counter'
    if (hover) {
        className += ' hover'
    }
    if (isFancy) {
        className += ' fancy'
    }
    return (
        <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>Add one</button>
        </div>
    )
}


function CounterItem1({ person }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
  
    let className = 'counter';
    if (hover) {
      className += ' hover';
    }
  
    return (
      <div
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <h1>{person}'s score: {score}</h1>
        <button onClick={() => setScore(score + 1)}>
          Add one
        </button>
      </div>
    );
  }