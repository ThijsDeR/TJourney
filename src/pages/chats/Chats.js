import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import Contacts from "../../components/chat/Contacts.js";
import Welcome from "../../components/chat/Welcome.js";
import ChatContainer from "../../components/chat/ChatContainer.js";
import { getAllUsers } from "../../services/auth-service.js";
import Loading from '../../components/loading/Loading.js';
import { getAllGroups } from "../../services/groups-service.js";
// tabs
import Tabs from '../../components/tabs/Tabs';
import { useLocation } from "react-router-dom";

const getGroups = async () => {
  getAllGroups()
}



export function Chats({ user, isLoading, setIsLoading }) {
  const [contacts, setContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const currentUser = user;
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();
  console.log(location.state)


  useEffect(() => {
    if (user) setIsLoading(false)
  }, [user, setIsLoading])


  useEffect(() => {

    const navigationTo = async () => {
      setIsLoaded(true);
    }
    navigationTo();
  }, []);

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

  useEffect(() => {
    getAllGroups().then((data) => {
      setGroups(data)
    })
  }, []);

  /**
   * Removes your own username from the contact list
   * 
   * @param {*} listOffAllTheUsers all the users 
   * @returns list users without the currentuser
   */
  function removeOwnUserFromList(listOffAllTheUsers) {
    const ContactList = listOffAllTheUsers;
    for (let i = 0; i < ContactList.length; i++) {
      if (currentUser._id === ContactList[i]._id) {
        ContactList.splice(i, 1)
      }

    }
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
        <Container>
          <ChatContainer currentChat={location.state.clickedFriend} currentUser={currentUser} />
        </Container>
      }
    </>
  )
}


const Container = styled.div`
max-width: 100%;
overflow-x: hidden;

  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  position:absolute;
  background-color: #131324;
  .container {
    height: 100vh;
    width: 99vw;
  
    position: absolute;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 25% 85%;
  
      overflow-x: hidden;
    }
  }

`;
