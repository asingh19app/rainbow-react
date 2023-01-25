import React, { useState } from 'react'

export default function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // we want to eliminate default behavior from default behavior of form submittal 
        e.preventDefault(
            //addColor, function we just built, should be availabe wihtin the props
            props.addColor(input)
        )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}


