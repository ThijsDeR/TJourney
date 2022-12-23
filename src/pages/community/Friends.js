import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Chats from '../chats/Chats.js'
import Navigation from "../../components/navigation/Navigation";
import styled from "styled-components"
import { getAllUsers } from "../../services/auth-service.js";

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, title, primaryColor, containerCenteredBetween, containerLeftRight, goals, tileStyle, containerCenteredLeftItem, smallButton, white, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider } from '../../styling/StylingVariables.js';
import ChatContainer from '../../components/chat/ChatContainer.js';

const Container = styled.div`
max-width: 100%;
overflow-x: hidden;
overflow-y: hidden;

  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  position:absolute;
  background-color: #131324;
  .container {
    height: 100vh;
    width: 50vw;
  
    position: absolute;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 25% 85%;
  
      overflow-x: hidden;
    }
  }

`;

function Friends({ user }) {

    const [contacts, setContacts] = useState([]);
    let visible = true;
    const currentUser = user;

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
        for (let i = 0; i < ContactList.length; i++) {
            if (currentUser._id === ContactList[i]._id) {
                ContactList.splice(i, 1)
            }

        }
        return ContactList
    }

    return (
        <>
            {/* Suggested friends */}
            <div style={containerLeftRight}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Suggested players</h1>
                </div>
                {/* TODO: link to see more suggested players */}
                <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >See more</div></Link>
            </div>

            <div style={suggestedBox}>

                {/* TODO: four suggested friends form db */}
                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>

                {/* Suggested friend block */}
                <div style={suggestedTile}>
                    <div style={pfBox}><div style={fakePF}></div></div>
                    <div style={boldText}>Name</div>
                    <div style={lightText}>Level x</div>
                </div>
            </div>

            {/* your friends */}
            <div style={containerLeftRight}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title, ...{ padding: 'unset' } }}>Friends</h1>
                </div>
                {/* TODO: link to add friend page? */}
                <Link to={'/add-friend'} style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >Add friend</div></Link>
            </div>

            {/* Friend block */}
            {/* <div style={chatContainer}>
                <Link to={{pathname: '/chat', state: {clickedFriend: 'friend'}}}>
                <div className='friendTile' style={friendsTile}>
                    <div className='friendItems' style={friendItems}>
                        <div className='friendIcon' style={fakePF}></div>
                        <div className='friendInfo'>
                            <div className='friendName' style={{ fontWeight: 'bold' }}> Name <em style={lightText}>level x</em> </div>
                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble}>8</div>
                </div>
                <hr style={chatDivider} />
                </Link>
            </div>

            <div style={chatContainer}>
                <div className='friendTile' style={friendsTile}>
                    <div className='friendItems' style={friendItems}>
                        <div className='friendIcon' style={fakePF}></div>
                        <div className='friendInfo'>
                            <div className='friendName' style={{ fontWeight: 'bold' }}> Name <em style={lightText}>level x</em> </div>
                            <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                        </div>
                    </div>
                    <div className='messageButton' style={notifacationBubble}>8</div>
                </div>
                <hr style={chatDivider} />

            </div> */}
            {contacts ? contacts.map((friend) => {
                return (<div style={visible ? { chatContainer } : { visibility: 'hidden' }}>
                    <div className='friendTile' style={friendsTile}>
                        <div className='friendItems' style={friendItems}>
                            <div className='friendIcon' style={fakePF}></div>
                            <div className='friendInfo' onClick={() => {visible = false}}>
                                <div className='friendName' style={{ fontWeight: 'bold' }}> {friend.username} <em style={lightText}>level {friend.level.amount}</em> </div>
                                <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                            </div>
                        </div>
                        <div className='messageButton' style={notifacationBubble}>8</div>
                    </div>
                    <hr style={chatDivider} />

                    <div style={!visible ? { chatContainer } : { visibility: 'hidden' }} onClick={() => {visible = true}}>
                        <Container>
                            <ChatContainer currentChat={'teaEyes'} currentUser={user} />
                        </Container>
                    </div>
                </div>)
            }) : ""}

        </>
    )
}
export default Friends;