import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { createGroups, getAllGroups } from '../../services/groups-service.js';


// styling
import 'bulma/css/bulma.min.css';
import { smallButton, friendsTile, friendItems, fakePF, chatContainer, searchBar, unsetLinkStyle, containerLeftRight } from '../../styling/StylingVariables.js';
import { getAllUsers, getCurrentUser } from '../../services/auth-service.js';
import Loading from '../loading/Loading.js';

let friendsInGroup = [];
export function CreateGroupForm(props) {
    const localUser = JSON.parse(localStorage.getItem("user"))
    const [users, setUsers] = useState(undefined)
    const [CurrentUser, setUser] = useState(undefined)
    const [groups, setGroups] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = (e) => {
        //  prevent page refresh
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    useEffect(() => {
        getAllUsers().then((data) => {
            setUsers(data)
        })
        getCurrentUser().then((data) => {
            friendsInGroup.push(data)
        })
        getAllGroups().then((data) => {
            setGroups(data)
        })
        setIsLoading(false)
    }, [])

    return (
        <>
            {isLoading ? <Loading /> :
                <>
                    {/* TODO: add friend when button is clicked */}
                    <div style={{
                        justifySelf: 'flex-end',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <div style={containerLeftRight(props.user.preferences.style)}>
                            <Link to="/community" style={unsetLinkStyle(props.user.preferences.style)}>
                                <div style={{ ...smallButton(props.user.preferences.style), ...{ width: '70px' } }}>Cancel</div>
                            </Link>
                            <div style={{ ...{ width: '80%' } }}>   

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <h1 className="is-size-1 has-text-white">New Group Chat</h1>
                                </div>

                            </div>
                            <Link to="/community" style={unsetLinkStyle(props.user.preferences.style)}>
                                <div style={{ ...smallButton(props.user.preferences.style), ...{ width: '70px' } }} onClick={() => createGroups(props.name, props.description, friendsInGroup, localUser.id, "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")}>Create Group</div>
                            </Link>
                        </div>
                    </div>
                    <div className="container mx-3">
                        <div className="field">
                            <label className="label">Group Name</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Group Name" onInput={(e) => props.setName(e.target.value)} value={props.name} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Group Description</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Group Description" onInput={(e) => props.setDescription(e.target.value)} value={props.description}></textarea>
                            </div>
                        </div>

                        <input
                            style={searchBar(props.user.preferences.style)}
                            type="text"
                            placeholder="Search"
                            onChange={handleSearchInput}
                            value={searchInput} />
                        {users ? users.map(person => (
                            <div className='userDiv' key={person._id}>
                                <div style={chatContainer(props.user.preferences.style)}>
                                    <div className='friendTile' style={{ ...friendsTile(props.user.preferences.style), ...{ margin: 'unset' } }}>
                                        <div className='friendItems' style={friendItems(props.user.preferences.style)}>
                                            <div className='friendIcon' style={fakePF(props.user.preferences.style)}></div>
                                            <div className='friendInfo'>
                                                <div className='friendName' style={{ fontWeight: 'bold' }}> {person.username} </div>
                                                <div className='friendLevel' style={{ fontWeight: 'lighter' }}> Level {person.level.level} </div>
                                            </div>
                                        </div>

                                        <div style={{
                                            justifySelf: 'flex-end',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }} onClick={(e) => {
                                            friendsInGroup.push(person)
                                            e.target.closest(".userDiv").remove()
                                            // TODO: remove user after button is clicked
                                        }}>
                                            <div style={{ ...smallButton(props.user.preferences.style), ...{ width: '70px' } }}>Add</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        ))
                            : <div></div>}
                    </div>
                </>}
        </>
    );
}
