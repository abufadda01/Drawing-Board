import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';

function App() {

  const [selectedColor , setSelectedColor] = useState({
    color : ""
  })

  const onChange = (e) => {
    setSelectedColor({...selectedColor , [e.target.name] : e.target.value})
  }
  
  const {color} = selectedColor

  const [resetCanvas , setResetCanvas] = useState(false)

  return (
    <div className="App">

      <Canvas resetCanvas={resetCanvas} setResetCanvas={setResetCanvas} width={800} height={500} color={color} />

      <div className='buttons'>

      <div className='selectOptions'>

        <select onChange={onChange} name='color'>
            <option value="" selected disabled>choose color</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
            <option value="black">black</option>
            
        </select>
      
      </div>

      <button onClick={() => setResetCanvas(prev => !prev)}>clear board</button>

      </div>


      
    </div>
  );
}

export default App;
