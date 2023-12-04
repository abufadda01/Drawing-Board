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

  return (
    <div className="App">

      <Canvas width={800} height={500} color={color} />

      <div className='selectOptions'>
        <select onChange={onChange} name='color'>
            <option value="" selected disabled>choose color</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
      
      </div>
      
    </div>
  );
}

export default App;
