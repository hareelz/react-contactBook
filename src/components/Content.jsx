import React, { useState } from 'react'
import './Content.css'

const Content = (props) => {
    const [photoInp, setPhotoInp] = useState('')
    const [nameInp, setNameInp] = useState('')
    const [numberInp, setNumberInp] = useState('')
    const handleContactAdd = () => {
        if(!photoInp.trim() && 
        !nameInp.trim() && 
        !numberInp.trim()) {
            alert('заполните все поля😡😡😡')
            return;
        }
        const newContent = {
            photo: photoInp,
            name: nameInp,
            number: numberInp,
            id: Date.now()
        }
        props.handleContact(newContent)
        setNameInp('')
        setPhotoInp('')
        setNumberInp('')
    }
  return (
    <div>
        <div className='box'>
        <h1>Add Contact</h1>
        <input type="text" placeholder='photo...' value={photoInp} onChange={(e) => setPhotoInp(e.target.value)}/>
        <input type="text" placeholder='name...' value={nameInp} onChange={(e) => setNameInp(e.target.value)}/>
        <input type="text" placeholder='number...' value={numberInp} onChange={(e) => setNumberInp(e.target.value)}/>
        <button onClick={handleContactAdd}>return</button>
        </div>
    </div>
  )
}

export default Content