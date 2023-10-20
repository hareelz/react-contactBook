import React from 'react'
import './Content.css'

const ToContent = (props) => {
  return (
    <div>
        <h2>Contacts</h2>
        <ul>
            {props.contact.map((item) => <li key={item.id} className='contact'><img src={item.photo} alt={item.name} className='img-contact'/>
            <p className='name-contact'>{item.name}</p>
            <p className='number-contact'>{item.number}</p>
            <button className='btn-delete btn' onClick={() => props.handleContactDelete(item.id)}>delete</button>
            <button className='btn-edit btn' onClick={() => props.handleEdit(item)}>edit</button></li>)}
            
        </ul>
    </div>
  )
}

export default ToContent