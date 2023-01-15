
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

let timer = 0;
export default function FriendChat({ user, setIsLoading, isLoading }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const [messages, setMessages] = useState(undefined);
    const [friend, setFriend] = useState(undefined);
    const [msg, setMsg] = useState("");

    const getMessages = () => {
        if (user && searchParams.get("id")) {
            getAllMessages().then((messages) => {
                const relevantMessages = messages.filter((message) => message.user.includes(user._id) && message.user.includes(searchParams.get("id")))
                setMessages(relevantMessages);
            });
        }
    }


    useEffect(() => {
        getUser(searchParams.get("id")).then((user) => {
            setFriend(user)
            getMessages()
        })
    }, [])

    useEffect(() => {
        if (friend) setIsLoading(false)
    }, [friend])

    /**
     * update the messages
     */
    function updateData() {
        if (timer <= 0) {
            getMessages()
            timer = 500;
        } else timer--;
    }

    const sendChat = () => {
        if (msg.length > 0) {
            handleSendMsg();
            setMsg('');
        }
    }


    /**
     * select the messages from the corresponding chat
     * 
     * @param {*} response List witg all the messages
     * @returns selected messages from the correct chat
     */
    // function SelectChat(response) {
    //     let ListWithCorrespondingChatMessages = [];
    //     response.forEach(element => {
    //         if (currentChat._id === element.user[1] || currentChat._id === element.user[0]) {
    //             if (currentUser._id === element.user[1] || element.user[0] === currentUser._id) {
    //                 ListWithCorrespondingChatMessages.push(element)
    //             }
    //         }
    //     }
    //     );
    //     return ListWithCorrespondingChatMessages;
    // }

    /**
     * send the messages to the database
     * 
     * @param {*} msg the message
     */
    const handleSendMsg = async () => {
        console.log(msg, user._id, friend._id)
        await createMessage(msg, user._id, friend._id)
    };

    if (user === undefined && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    if (friend === undefined && !isLoading) {
        return <Navigate to="/community" replace />;
    }

    updateData()

    return (
        <>
            {isLoading ? <Loading /> : <>
                <div style={{ position: "fixed", top: "0", left: "0", right: "0", height: "40px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: user.preferences.style.primaryColor, color: user.preferences.style.textColor }}>
                    <Link to="/community" style={{ color: user.preferences.style.secondaryColor, margin: "0 25px" }}><FontAwesomeIcon icon={faChevronLeft} /></Link>
                    <h3 style={{ margin: "0 25px" }}>{friend.username}</h3>
                </div>
                <div className='chatContainer' style={{ position: "fixed", top: "50px", left: "0", right: "0", bottom: "135px", display: "flex", flexDirection: "column-reverse", overflowY: "auto" }}>
                    {
                        messages ? messages.map((message) => (
                            <div key={messages._id} style={{ display: "flex", justifyContent: "end" }}>
                                <div style={{ margin: "0 25px", padding: "5px 20px", borderRadius: "25px", backgroundColor: user.preferences.style.primaryColor, color: user.preferences.style.textColor }}>
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
                <Navigation user={user} />
            </>}
        </>
    );
}