import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// styling
import 'bulma/css/bulma.min.css';
import { title, containerLeftRight, friendsTile, friendItems, fakePF, chatContainer, lightText, chatDivider } from '../../styling/StylingVariables.js';

import { calculateLevel } from '../../services/level-service';
import { getAllGroups } from '../../services/groups-service.js';


function Groups({ user, setIsLoading, isLoading }) {
    const [groups, setGroups] = useState(undefined);

    useEffect(() => {
        getAllGroups().then((groups) => {
            setGroups(groups)
        });
    }, [])


    return (
        <>
            {/* your friends */}
            <div style={containerLeftRight(user.preferences.style)}>
                <div style={{ verticalAlign: 'middle' }}>
                    <h1 style={{ ...title(user.preferences.style), ...{ padding: 'unset' } }}>Groups</h1>
                </div>
                <Link to={'/add-group'} style={{ height: '24px', border: 'unset' }}><div style={{ color: user.preferences.style.primaryColor }} >Add group</div></Link>
            </div>

            {/* Friend block */}
            {
                groups ? groups.map((group) => (
                    <div className='userDiv' style={chatContainer(user.preferences.style)} onClick={() => {
                        window.location.href = `/groupChat?id=${group._id}`;
                    }}>
                        <div className='friendTile' style={friendsTile(user.preferences.style)}>
                            <div className='friendItems' style={friendItems(user.preferences.style)}>
                                <div className='friendIcon' style={fakePF(user.preferences.style)}></div>
                                <div className='friendInfo'>
                                    <div className='friendName' style={{ fontWeight: 'bold' }}> {group.name} </div>
                                    {/* TODO: Get last message */}
                                    <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Last message </div>
                                </div>
                            </div>
                        </div>
                        <hr style={chatDivider(user.preferences.style)} />
                    </div>
                )) : ""
            }

            {
                groups && groups.length === 0 ? "No groups" : ""
            }
        </>
    )
}
export default Groups;