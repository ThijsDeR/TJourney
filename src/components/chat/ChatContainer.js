
import React, { useState, useEffect, useRef } from 'react'
import ChatInput from './ChatInput';
import { v4 as uuidv4 } from "uuid";
import { getAllMessages, createMessage } from '../../services/chat-service.js';
import "./css/ChatContainer.css"

let timer = 0;
export default function ChatContainer({ currentChat, currentUser }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  updateData()

  /**
   * gets the messsage when you open the chat( only in the beginning)
   */
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


  /**
   * update the messages
   */
  function updateData() {
    if (timer > 500) {
      const fetchNewData = async () => {
        const messages = await getAllMessages();
        let messagesWithTheCurrentUser = SelectChat(messages)
        setMessages(messagesWithTheCurrentUser)
      }
      fetchNewData()
      timer = 0;
    } else if (currentChat) {
      timer = timer + 1;
    }
  }


  /**
   * select the messages from the corresponding chat
   * 
   * @param {*} response List witg all the messages
   * @returns selected messages from the correct chat
   */
  function SelectChat(response) {
    let ListWithCorrespondingChatMessages = [];
    response.forEach(element => {
      if (currentChat._id === element.user[1] || currentChat._id === element.user[0]) {
        if (currentUser._id ===element.user[1] || element.user[0] === currentUser._id) {
          ListWithCorrespondingChatMessages.push(element)
        }
      }
    }
    );
    return ListWithCorrespondingChatMessages;
  }

  /**
   * send the messages to the database
   * 
   * @param {*} msg the message
   */
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
          <div className='Chat-container'>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                  <div key={uuidv4()}>
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
          </div>
        )
      }
    </>
  );
}
