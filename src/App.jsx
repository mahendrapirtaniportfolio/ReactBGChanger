import { useState, useRef } from 'react'
import './App.css'
import Button from './Button';
import allColors from './colors';

function App() {
  const [color, setColor] = useState('Black');
  const colorRef = useRef(null);

  return (
    <>
      <div
       className='w-screen h-screen'
       style={{backgroundColor: color}}
      >
        <div className='fixed top-5 inset-x-0 flex flex-wrap justify-center px-2'>
          <div
            className='flex flex-wrap justify-center text-black bg-white font-medium from-stone-900 px-4 py-1 text-lg rounded-full'
            ref={colorRef}
          >
            {allColors[color]}
          </div>
          <button
            className='bg-black text-white rounded-full px-4 py-1 font-medium mx-2 hover:bg-white hover:text-black'
            onClick={() => {
              window.navigator.clipboard.writeText(allColors[color]);
              colorRef.current?.select();
            }}
          
          >Copy</button>
        </div>
        <div
          className='fixed bottom-3 flex flex-wrap justify-center inset-x-0 px-2'
        >
          <div
            className='flex flex-wrap justify-center bg-white px-3 gap-2 py-2 shadow-2xl rounded-3xl'
          >
            {
              Object.keys(allColors).map((colorName, i) => {
                return (
                  <Button color={colorName} colorCode={allColors[colorName]} setColor={setColor} key={i} colorRef={colorRef} />
                )
              })
              
              
              // colorsArray.map((color, i) => {
              //   return (
              //   <Button color={color} setColor={setColor} key={i}>
              //     {color}
              //     </Button>
              //   )
              // })
            }
{/* 
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: 'red'}}
              onClick={() => setColor('red')}
            >
              red
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: 'blue'}}
              onClick={() => setColor('blue')}
            >
              blue
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: 'green'}}
              onClick={() => setColor('green')}
            >
              green
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor: 'olive'}}
              onClick={() => setColor('olive')}
            >
              olive
            </button> */}
          </div>

        </div>


      </div>
    </>
  )
}

export default App
