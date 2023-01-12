import React, { useState, useEffect } from 'react'
import "./css/Contacts.css"
import { friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, lightText, tabListItem, centerDiv, tabListItemContainer, tabList, linup, communityTileStyle, tabContent } from '../../styling/StylingVariables.js';

import { Link } from 'react-router-dom';


export default function Contacts({ contacts, currentUser, changeChat, style }) {
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
          <div className="Contacts">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div className="tabs" style={tabListItemContainer(style)}>
              <div className="item" >
                <div style={centerDiv(style)}>
                  <ol className="tab-list" style={{ display: 'flex' }}>
                    <li style={communityTileStyle(style)}><Link style={{ textDecoration: 'none' }} to={'/chatFriends'}>Friends</Link></li>
                    <li style={tabContent(style)}><Link style={{ textDecoration: 'none' }} to={'/chatGroups'}>Groups</Link></li>
                    <li style={tabContent(style)}><Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>Leaderboard</Link></li>
                  </ol>
                </div>
              </div>
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
                        <div className='friendTile' style={friendsTile(style)}>
                          <div className='friendItems' >
                            <div className='fakePF' style={fakePF(style)}></div>
                            <div className='friendName'> {contact.username} </div>
                            <em className='levelUser'>level {contact.level.amount}</em>
                            <div className='lastMessages' > Last message </div>
                            <div className='notificationPopup' style={notifacationBubble(style)}>8</div>
                          </div>
                        </div>
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
