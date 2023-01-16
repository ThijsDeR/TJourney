
import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from "uuid";
import { getAllMessages, createMessage } from '../../services/chat-service.js';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { getUser } from '../../services/auth-service.js';
import Loading from '../../components/loading/Loading.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import ChatInput from '../../components/chat/ChatInput.js';
import Navigation from '../../components/navigation/Navigation.js';
import "./chatStyle.css";

export default function FriendChat({ user }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [messages, setMessages] = useState(undefined);
    const [friend, setFriend] = useState(undefined);
    const [msg, setMsg] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const getMessages = async () => {
        if (user && searchParams.get("id")) {
            const messages = await getAllMessages()
            const relevantMessages = messages.filter((message) => message.user.includes(user._id) && message.user.includes(searchParams.get("id")))
            setMessages(relevantMessages);
        }
    }


    useEffect(() => {
        getUser(searchParams.get("id")).then((user) => {
            setFriend(user)
            getMessages().then(() => {
                setIsLoading(false)
            })
        })
    }, [])

    /**
     * update the messages
     */
    setInterval(() => {
        getMessages();
    }, 1000)

    const sendChat = () => {
        if (msg.length > 0) {
            handleSendMsg();
            setMsg('');
        }
    }

    /**
     * send the messages to the database
     * 
     * @param {*} msg the message
     */
    const handleSendMsg = async () => {
        await createMessage(msg, user._id, friend._id)
    };

    if (friend === undefined && !isLoading) {
        return <Navigate to="/community" replace />;
    }

    return (
        <>
            {isLoading ? <Loading /> : <>
                <div style={{ position: "fixed", top: "0", left: "0", right: "0", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: user.preferences.style.primaryColor, color: user.preferences.style.textColor }}>
                    <Link to="/community" style={{ color: user.preferences.style.secondaryColor, margin: "0 25px" }}><FontAwesomeIcon icon={faChevronLeft} /></Link>
                    <h3 style={{ margin: "0 25px" }}>{friend.username}</h3>
                </div>
                <div className='chatContainer' style={{ position: "fixed", top: "50px", left: "0", right: "0", bottom: "135px", display: "flex", flexDirection: "column", overflowY: "auto" }}>
                    {
                        messages ? messages.map((message) => (
                            <div key={messages._id} style={{ display: "flex", justifyContent: "end" }}>
                                <div style={{ margin: "5px 25px", padding: "5px 20px", borderRadius: "25px", backgroundColor: user.preferences.style.primaryColor, color: user.preferences.style.textColor }}>
                                    <div >
                                        <p>{message.message}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        ) : ''
                    }
                </div>
                <div style={{ position: "fixed", bottom: "75px", left: "0", right: "0", height: "50px", display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: user.preferences.style.primaryColor, color: user.preferences.style.textColor }}>
                    {/* <ChatInput handleSendMsg={handleSendMsg} /> */}
                    <input type="text" value={msg} onChange={(e) => { setMsg(e.target.value) }} style={{ border: "none", height: "80%", width: "75%", borderRadius: "20px", padding: "0 10px", backgroundColor: user.preferences.style.secondaryColor, color: user.preferences.style.textColor }} />
                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: user.preferences.style.secondaryColor }} onClick={sendChat} />
                </div>
                <Navigation style={user.preferences.style} />
            </>}
        </>
    );
}