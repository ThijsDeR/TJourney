import React, { useState } from 'react'
import styled from 'styled-components'
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

// const Container = styled.div`
// // the css of the chat input

// //prevent you scrolling horizontally
// display: grid;
// overflow-x: hidden;


// grid-template-columns: 5% 95%;

// align-items: center;
// background-color: #080420;
// padding-bottom: 0.2rem;
// padding-left:0.3rem;
// @media screen and (min-width: 720px) and (max-width: 1080px){
//     padding: 0 1rem;
//     gap: 1rem;
// }
// .button-container{
//     display: flex;
//     align-items: center;
//     color: white;
//     gap: 1rem;
//     .emoji{ 
//         position: absolute;
//         @media screen and (min-width: 720px) and (max-width: 1080px){
//             svg{
//                 margin: 1em;
//             } 
//          }
//         svg{  
//             font-size: 1.2rem;
//             color: #ffff00c8;
//             cursor: pointer;
//         }

//         // changes the position of the emoji box
//         aside{
//             @media screen and (min-width: 720px) and (max-width: 1080px){
//                 position:fixed;
//                 width:200px;
//                 height: 100px;   
//                 }
//             top:22%;
//             position: fixed;
//             width:250px !important;
//             height: 300px ;           
//         }

//         .emoji-picker-react{
//             position: absolute;
//             top: -350px;
//             background-color: #080420;
//             box-shadow: 0 5px 10px #9a86f3;
//             border-color: #9186f3;
//             .emoji-scroll-wrapper::-webkit-scrollbar{
//                 background-color: #080420;
//                 width: 5px;
//                 &-thumb {
//                     background-color: #9a86f3;
//                 }
//             }
//             .emoji-categories{
//                 button{
//                     filter: contrast(0);
//                 }
//             }
//             .emoji-search{
//                 background-color: transparent;
//                 border-color: #9186f3;
//                 color: white;
//             }
//             .emoji-group:before {
//                 background-color: #080420;
//             }
//         }
//     }
// }

// .input-container{
//     width: 90%;
//     border-radius: 2rem;
//     display: flex;
//     align-items: center;
//     margin-left: 1rem;
//     gap: 2rem;
//     background-color: #ffffff34;
//     input{
//         width: 90%;
//         height: 60%;
//         background-color: transparent;
//         color: white;
//         border: none;
//         padding-left: 1rem;
//         font-size: 1.2rem;
//         &::selection{
//             background-color: #9186f3;
//         }
//         &:focus{
//             outline: none;
//         }
//     }
//     button{
//         padding:  0.5rem;
//         border-radius: 2rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background-color: #9a86f3;
//         border: none;
//         cursor: pointer;
//         @media screen and (min-width: 720px) and (max-width: 1080px){
//             padding: 0.3rem 1rem;
//             background-color: red
//             svg{
//             font-size: 1rem;
//             color: white;
//             }
//         }
//         svg{
//             font-size: 2rem;
//             color: white;
//         }
//     }
// }
// `;
