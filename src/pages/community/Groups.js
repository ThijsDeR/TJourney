import React, { useEffect, useState } from 'react';
import { Link, redirect } from "react-router-dom";
import { createGroups, getAllGroups } from '../../services/groups-service.js';
import styled from "styled-components"

// styling
import 'bulma/css/bulma.min.css';
import { overflow, title, primaryColor, containerLeftRight, friendsTile, friendItems, notifacationBubble, fakePF, chatContainer, suggestedBox, suggestedTile, pfBox, boldText, lightText, chatDivider, bolderText } from '../../styling/StylingVariables.js';
import { GroupChats } from '../chats/GroupChat.js';
import { Chats } from '../chats/Chats.js';
import ChatContainer from '../../components/chat/ChatContainer.js';


function Groups(user, isLoading, setIsLoading) {
    const [groups, setGroups] = useState(undefined)

    let visible = true;

    useEffect(() => {
        getAllGroups().then((data) => {
            setGroups(data)
        })
    }, [])

    return (
        <>
            <div>
                {/* Suggested groups */}
                <div style={containerLeftRight}>
                    <div style={{ verticalAlign: 'middle' }}>
                        <h1 style={{ ...title, ...{ padding: 'unset' } }}>Suggested groups</h1>
                    </div>
                    {/* TODO: link to see more suggested players */}
                    <Link style={{ height: '24px', border: 'unset' }}><div style={{ color: primaryColor }} >See more</div></Link>
                </div>

                <div style={suggestedBox}>

                    {/* TODO: four suggested groups form db */}
                    {/* Suggested group block */}
                    <div style={suggestedTile}>
                        <div style={pfBox}><div style={fakePF}></div></div>
                        <div style={boldText}>Name</div>
                        <div style={lightText}>x players</div>
                    </div>

                    {/* Suggested group block */}
                    <div style={suggestedTile}>
                        <div style={pfBox}><div style={fakePF}></div></div>
                        <div style={boldText}>Name</div>
                        <div style={lightText}>x players</div>
                    </div>

                    {/* Suggested group block */}
                    <div style={suggestedTile}>
                        <div style={pfBox}><div style={fakePF}></div></div>
                        <div style={boldText}>Name</div>
                        <div style={lightText}>x players</div>
                    </div>

                    {/* Suggested group block */}
                    <div style={suggestedTile}>
                        <div style={pfBox}><div style={fakePF}></div></div>
                        <div style={boldText}>Name</div>
                        <div style={lightText}>x players</div>
                    </div>
                </div>

                {/* your groups */}
                {groups ? groups.map((group) => {
                return (<div style={visible ? { chatContainer } : { visibility: 'hidden' }}>
                    <div className='friendTile' style={friendsTile}>
                        <div className='friendItems' style={friendItems}>
                            <div className='friendIcon' style={fakePF}></div>
                            <div className='friendInfo' onClick={() => {visible = false}}>
                                <div className='friendName' style={{ fontWeight: 'bold' }}> {group.name}</div>
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
            </div>
        </>
    )
}

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

export default Groups;