import { useState } from "react"
import { sculptureList } from "./stateData"

export default function States() {
    return (
        <>
            <Gallery />
        </>
    )
}

function Gallery() {
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)
    let sculpture = sculptureList[index]
    function handleNextClick() {
        index === sculptureList.length-1? setIndex(0): setIndex(index + 1)
    }
    function handleMoreClick() {
        setShowMore(!showMore)
    }
    return (
        <>
            <button onClick={handleNextClick}>Next</button>
            <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
            <h3>({index + 1} of {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <button onClick={handleMoreClick}>{showMore?'showLesss':'howMore'}</button>
            {showMore && <p>{sculpture.description}</p>}
        </>
    )
}







