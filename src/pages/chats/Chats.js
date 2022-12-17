import styled from "styled-components"
import { useState, useEffect, useRef } from 'react'
import Contacts from "../../components/chat/Contacts.js";
import Welcome from "../../components/chat/Welcome.js";
import ChatContainer from "../../components/chat/ChatContainer.js";
import { getAllTheUsers } from "../../services/auth-service.js";
import Loading from '../../components/loading/Loading.js';


export function Chats({ user, isLoading, setIsLoading }) {
  const [contacts, setContacts] = useState([]);
  const currentUser = user;
  const [currentChat, setCurrentChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (user) setIsLoading(false)
  }, [user, setIsLoading])
  useEffect(() => {

    const navigationTo = async () => {
      setIsLoaded(true);
    }
    navigationTo();
  });

  useEffect(() => {
    const getCurrentUser = async () => {
      if (currentUser) {
        setContacts(removeOwnUserFromList(await getAllTheUsers()));
      }
    }
    getCurrentUser();
  }, [user, currentUser]);

  function removeOwnUserFromList(listAllUsers) {
    const ContactList = listAllUsers;
    for (let i = 0; i < ContactList.length; i++) {
      if (currentUser._id === ContactList[i]._id) {
        ContactList.splice(i, 1)
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
              <ChatContainer currentChat={currentChat} currentUser={currentUser} />
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
