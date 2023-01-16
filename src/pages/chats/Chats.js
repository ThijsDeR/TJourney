import { useState, useEffect, useRef } from 'react'
import Contacts from "../../components/chat/Contacts.js";
import Welcome from "../../components/chat/Welcome.js";
import ChatContainer from "../../components/chat/ChatContainer.js";
import { getAllUsers } from "../../services/auth-service.js";
import Loading from '../../components/loading/Loading.js';
import './Chat.css';
import Navigation from "../../components/navigation/Navigation";

export function Chats({ user }) {
    const [contacts, setContacts] = useState([]);
    const currentUser = user;
    const [currentChat, setCurrentChat] = useState(undefined);

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


    /**
     * Removes your own username from the contact list
     * 
     * @param {*} listOffAllTheUsers all the users 
     * @returns list users without the currentuser
     */
    function removeOwnUserFromList(listOffAllTheUsers) {
        const ContactList = listOffAllTheUsers;
        ContactList.forEach((element, index) => {
            if (currentUser._id === ContactList[index]._id) {
                ContactList.splice(index, 1)
            }
        });
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
            <div className="Chats">

                <div className="containerChat">
                    <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange} style={user.preferences.style} />
                    {
                        currentChat === undefined ?
                            "" :
                            <ChatContainer currentChat={currentChat} currentUser={currentUser} />
                    }
                </div>
            </div>
            <Navigation style={user.preferences.style} />
        </>
    )
}
