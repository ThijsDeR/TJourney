
import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from "uuid";
import { getAllMessages, createMessage } from '../../services/chat-service.js';

let timer = 0;
export default function ChatContainer({ currentChat, currentUser }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  updateData()
  useEffect(() => {
    const fetchData = async () => {
      if (currentChat && currentUser) {
        const messages = await getAllMessages();
        let messagesWithTheCurrentUser = SelectChat(messages)
        setMessages(messagesWithTheCurrentUser);
      }
    }
    fetchData();
  }, [currentChat]);

  function updateData() {
     if (timer > 500) {
      const fetchNewData = async () => {
        const messages = await getAllMessages();
        let messagesWithTheCurrentUser = SelectChat(messages)
        setMessages(messagesWithTheCurrentUser)      
      }
      fetchNewData()
      timer = 0;
    } else if(currentChat) {
      timer = timer + 1;
    }
  }



  function SelectChat(response) {
    let ListWithCorrespondingChatMessages = [];
    for (let i = 0; i < response.length; i++) {
      if (currentChat._id === response[i].user[1] || currentChat._id === response[i].user[0]) {
        if (currentUser._id === response[i].user[1] || response[i].user[0] === currentUser._id) {
          ListWithCorrespondingChatMessages.push(response[i])
        }
      }

    }
    return ListWithCorrespondingChatMessages;
  }

  const handleSendMsg = async (msg) => {
    await createMessage(msg, currentChat._id, currentUser._id)
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {
        currentChat && (
          <Container>
               <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <div className="chat-header">
              <div className="user-details">
                <div className="username">
                  {//shows the username of the person you sent a message to
                  }
                  <h3>{currentChat.username}</h3>
                </div>
              </div>

            </div>
            <div className="chat-messages">
              {messages.map((message) => {
                return (
                  <div ref={scrollRef} key={uuidv4()}>
                    <div
                      //Puts the messages you sent to right and the messsages you get on the left
                      className={`message ${message.sender === currentUser._id ?
                        "sended" :
                        "recieved"
                        }`
                      }
                    >
                      <div className="content ">
                        <p>{message.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <ChatInput handleSendMsg={handleSendMsg} />
          </Container>
        )
      }
    </>
  );
}
const Container = styled.div`
  display: grid;
  overflow-x: hidden;

  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
          text-transform: capitalize;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      background-color: #100c14;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color:  #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;;
      }
    }
  }
`;