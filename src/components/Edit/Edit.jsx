import React, { useState } from 'react'
import './Edit.css'

const Edit = (props) => {

const [editContact, setEditContact] = useState(props.contactToEdit)
console.log(editContact);

  return (
    <div className='main-modal'>
        <div className='inner-modal'>
            <div className="close">
                <button onClick={props.handleClose}>&times;</button>
            </div>
            <input type="text" className='inp-edit' value={editContact.photo} onChange={(e)=>setEditContact({...editContact, photo:e.target.value})}/>
            <input type="text" className='inp-edit' value={editContact.name} onChange={(e)=>setEditContact({...editContact, name:e.target.value})}/>
            <input type="text" className='inp-edit' value={editContact.number} onChange={(e)=>setEditContact({...editContact, number:e.target.value})}/>
            <button onClick={() => props.saveChages(editContact)}>Save</button>
        </div>
    </div>
  )
}

export default Edit