import React, { useState } from 'react'
import Input from './Input';
import Display from './Display';

function App() {

  const [item, setItem] = useState([])

  function setItemHandler(value) {
    setItem([...item, value])
  }


  function deleteItem(indexNumber) {
    const newarr = item.filter(
      (data, index) => {
        if (index == indexNumber) {
          return false
        } else {
          return true
        }
      }
    )
    setItem(newarr)
  }

  return (

    <div style={{
      margin: "120px"
    }}>
      <div className='w-50 border bg-danger shadow-md my-5 p-3 bg-body-tertiary rounded mx-auto'>
        <Input setItemHandler={setItemHandler} />
        <Display data={item} deleteItem={deleteItem} />
      </div>

      <div className='heading'>
        Todo-List
      </div>
    </div>
  )
}


export default App;
