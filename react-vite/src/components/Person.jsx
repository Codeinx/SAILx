

const Person = (props) => {
    return (
        <>
            <h1>Hi, my name is {props.oruko}, I am {Math.floor(Math.random()*30)+1
            } years old.</h1>
        </>
    )
}

export default Person