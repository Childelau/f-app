export default function Event() {
    return (
        <>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </>
    )    
}

function Button({onClick, children}) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

function PlayButton({movieName}) {
    function handlePlayClick() {
        alert(`Playing ${movieName}`)
    }
    return (
        <Button onClick={handlePlayClick}>Play "{movieName}"</Button>
    )
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            UploadImage
        </Button>
    )
}





