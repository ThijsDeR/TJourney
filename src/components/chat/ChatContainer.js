
import React, { useState, useEffect , useRef} from 'react'
import styled from "styled-components"
import ChatInput from './ChatInput';
import axios from "axios";
import { getAllMessagesRoute, sendMessageRoute } from '../../utils/APIRoutes'
import { v4 as uuidv4} from "uuid";
import { getAllMessages, createMessage } from '../../services/chat-service.js';

export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
  

    const fetchData = async () => {
      if(currentChat && currentUser){
        const response =await getAllMessages();
       
       SelectChat(response)
        // console.log(response[0].message)
        setMessages(response);
        console.log(messages);
      }
    }
    fetchData();
  }, [currentChat]);

function SelectChat(response) {
  for (let i = 0; i < response.length; i++) {
   
         if (currentChat._id === response[i].user[1]||response[i].user[0]) {
          console.log(currentChat._id === response[i].user[1]||response[i].user[0])
          if (currentUser._id === response[i].user[1]||response[i].user[0]) {
    
            console.log(response[i])
          }
    
         }
         
  }
}


  const handleSendMsg = async (msg) => {
    console.log(msg)
   await createMessage(msg,currentChat._id,currentUser._id)
   console.log(currentChat._id)
   console.log(currentChat)
    // await axios.post(sendMessageRoute, {
    //   from: currentUser._id,
    //   to: currentChat._id,
    //   message: msg,
    // });
    // socket.current.emit("send-msg", {
    //   to: currentChat._id,
    //   from: currentUser._id,
    //   message: msg,
    // });

    // const msgs = [...messages];
    // msgs.push({
    //   fromSelf: true,
    //   message: msg,
    // });
    // setMessages(msgs);
  };

  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on("msg-recieved", (msg) => {
  //       setArrivalMessage({
  //         fromSelf: false,
  //         message: msg,
  //       });
  //     })
  //   }
  // }, []);

  useEffect(()=>{
    arrivalMessage && setMessages((prev)=>[...prev,arrivalMessage]);
  },[arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {
        currentChat && (
          <Container>
            <div className="chat-header">
              <div className="user-details">
                             <div className="username">
                  <h3>{currentChat.username}</h3>
                </div>
              </div>
            
            </div>
            <div className="chat-messages">
              {messages.map((message) => {
                return (
                  <div ref={scrollRef} key={uuidv4()}>
                    <div 
                      className={`message ${message.fromSelf ?
                        "sended" :
                        "recieved"
                        }`}
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
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;