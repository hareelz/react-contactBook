import "./App.css";

import React, { useState } from "react";
import Content from "./components/Content";
import ToContent from "./components/ToContent";
import Edit from "./components/Edit/Edit";

const App = () => {
  const [contact, setContact] = useState([]);

  const [modal, setModal] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);

  const handleEdit = (contact) => {
    setModal(true);
    setContactToEdit(contact);
  };
  const handleClose = () => {
    setModal(false);
  };

  const handleContacts = (newObj) => {
    const newContact = [...contact];
    newContact.push(newObj);
    setContact(newContact);
  };

  const handleContactDelete = (id) => {
    const newContacts = contact.filter((item) => item.id !== id);
    setContact(newContacts);
  };

  const saveChages = (updateContacts) => {
    const newContact = contact.map((item) => {
      if (item.id === updateContacts.id) {
        return updateContacts;
      }
      return item;
    });
    setContact(newContact);
    handleClose();
  };

  return (
    <div>
      <Content handleContact={handleContacts} />
      <ToContent
        contact={contact}
        handleContactDelete={handleContactDelete}
        handleEdit={handleEdit}
      />
      {modal ? (
        <Edit
          contactToEdit={contactToEdit}
          handleClose={handleClose}
          saveChages={saveChages}
        />
      ) : null}
    </div>
  );
};

export default App;
