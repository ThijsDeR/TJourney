import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import axios from "axios";
import { json, useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../../utils/APIRoutes.js";
import Contacts from "../../components/chat/Contacts.js";
import Welcome from "../../components/chat/Welcome.js";
import ChatContainer from "../../components/chat/ChatContainer.js";
import { io } from "socket.io-client";
import { getAllTheUsers } from "../../services/auth-service.js";
import { getCurrentUser } from "../../services/auth-service.js"
import Loading from '../../components/loading/Loading.js';


export function Chats({ user, isLoading, setIsLoading }) {
  const socket = useRef();
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const currentUser = user;
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  // console.log(user)

  useEffect(() => {
    if (user) setIsLoading(false)
  }, [user, setIsLoading])
  useEffect(() => {

    const navigationTo = async () => {


      setIsLoaded(true);
    }

    navigationTo();
  });

  // useEffect(() => {
  //   if (currentUser) {
  //     socket.current = io(host);
  //     socket.current.emit("add-user", currentUser._id);
  //   }
  // }, [currentUser]);


  useEffect(() => {


    const getCurrentUser = async () => {
      console.log()

      if (currentUser) {
       
       
       
        setContacts( removeOwnUserFromList( await getAllTheUsers()));
      }
    }
    getCurrentUser();
  }, [user, currentUser]);

  function removeOwnUserFromList(listAllUsers) {
const ContactList = listAllUsers;
    for (let i = 0; i < ContactList.length; i++) {
      if (currentUser._id === test[i]._id) {
       
        ContactList.splice(i, 1)
        // console.log(listUsers);
      }

    }
    return ContactList
  }


  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  }

  return (
    <>
      {isLoading ? <Loading /> :
        <Container>

          <div className="container">
            <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} />
            {isLoaded &&
              currentChat === undefined ?
              <Welcome currentUser={currentUser} /> :
              <ChatContainer currentChat={currentChat} socket={socket} currentUser={currentUser} />
            }
          </div>
        </Container>
      }
    </>
  )

}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
