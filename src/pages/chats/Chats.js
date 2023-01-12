import { useState, useEffect, useRef } from 'react'
import Contacts from "../../components/chat/Contacts.js";
import Welcome from "../../components/chat/Welcome.js";
import ChatContainer from "../../components/chat/ChatContainer.js";
import { getAllUsers } from "../../services/auth-service.js";
import Loading from '../../components/loading/Loading.js';
import './Chat.css';
import Navigation from "../../components/navigation/Navigation";
import { Link } from 'react-router-dom';
import { friendsTile, notifacationBubble, fakePF, centerDiv, tabListItemContainer, communityTileStyle, tabContent } from '../../styling/StylingVariables.js';

let leaderboard = false;

export function Chats({ user, isLoading, setIsLoading }) {
  const [contacts, setContacts] = useState([]);
  const currentUser = user;
  const [currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    if (user) setIsLoading(false)
  }, [user, setIsLoading])

  /**
   * set the users
   */
  useEffect(() => {
    const getUsers = async () => {
      if (currentUser) {
        setContacts(removeOwnUserFromList(await getAllUsers()));
      }
    }
    getUsers();
  }, [user, currentUser]);



  /**
   * Removes your own username from the contact list
   * 
   * @param {*} listOffAllTheUsers all the users 
   * @returns list users without the currentuser
   */
  function removeOwnUserFromList(listOffAllTheUsers) {
    const ContactList = listOffAllTheUsers;
    ContactList.forEach((element, index) => {
      if (currentUser._id === ContactList[index]._id) {
        ContactList.splice(index, 1)
      }
    });
    return ContactList
  }

  /**
   * set current chat
   * 
   * @param {*} chat the chat
   */
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  }

  return (
    <>
      {isLoading ? <Loading /> :
        <div className="Chats">

          <div className="containerChat">

            <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} style={user.preferences.style} />
            {
              currentChat === undefined ?
                "" :
                <ChatContainer currentChat={currentChat} currentUser={currentUser} style={user.preferences.style} />
            }
            <div style={centerDiv(user.preferences.style)}>
              <ol className="tab-list" style={{ display: 'flex' }}>
                <li style={communityTileStyle(user.preferences.style)}><Link style={{ textDecoration: 'none' }} to={'/chatFriends'}>Friends</Link></li>
                <li style={tabContent(user.preferences.style)}><Link style={{ textDecoration: 'none' }} to={'/chatGroups'}>Groups</Link></li>
                <li style={tabContent(user.preferences.style)}><Link style={{ textDecoration: 'none' }} to={'/leaderboard'}>Leaderboard</Link></li>
              </ol>
            </div>
          </div>
        </div>
      }
      <Navigation user={user} />
    </>
  )
}
