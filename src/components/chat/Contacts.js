import React, { useState, useEffect } from 'react'
import Logo from "../../assets/teaScreech.png";
import "./css/Contacts.css"

export default function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  /**
   * set current username
   */
  useEffect(() => {
    if (currentUser) {
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  /**
   * change currentchat
   * 
   * @param {number} index place of the contact in the array
   * @param {*} contact the contact information
   */
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {
        currentUserName && (
          <div className ="Contacts">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div className="brand">

              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <img src={Logo} alt="logo" />
              <h3>TChat</h3>
            </div>
            <div className="contacts">

              {

                contacts.map((contact, index) => {
                  return (

                    <div
                      className={`contact ${index === currentSelected ? "selected" : ""
                        }`}
                      key={contact._id}
                      onClick={() => changeCurrentChat(index, contact)}>
                      <div className="username">
                        <h3>{contact.username}</h3>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="current-user">
              <div className="username">
                <h2>{currentUserName}</h2>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}



