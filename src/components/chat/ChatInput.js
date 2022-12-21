import React, { useState } from 'react'
import Picker from 'emoji-picker-react'
import { IoMdSend } from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs'
import "./css/ChatInput.css"

export default function ChatInput({ handleSendMsg }) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [msg, setMsg] = useState("");
    const handleEmojiPickerHideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (emoji) => {
        let message = msg;
        message += emoji.emoji;
        setMsg(message);
    }

   /**
    * send the chat messages to the database
    * @param {*} msg
    * 
    */
    const sendChat = (e) => {
        e.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg('');
        }
    }
    return (
        <div className = "ChatInput">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        {//Makes the chatInput and the emoji button
        }
            <div className="button-container">
                <div className="emoji" >
                    <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </div>
            </div>
            <form className='input-container' onSubmit={(e) => sendChat(e)}>
                <input type="text" placeholder='Type your message here!' value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                <button className="submit">
                    <IoMdSend />
                </button>
            </form>
        </div>
    )
}
