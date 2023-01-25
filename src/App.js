import React, {useState} from 'react'
import ColorBlock from './Components/ColorBlock';
import ColorForm from './Components/ColorForm';


function App(){
    let [colors, setColors] = useState([
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ])

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  let colorMap = colors.map((color, i) => {
    return(
      <ColorBlock key = {i} color = {color}></ColorBlock>
    )
  })
  return (
  < div className='App'>
    {colorMap}
  <ColorForm addColor = {addColor}/>
  </div>
  )
}

export default App;
