import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { createGroups, getAllGroups } from '../../services/groups-service.js';


// styling
import 'bulma/css/bulma.min.css';
import { smallButton, friendsTile, friendItems, fakePF, chatContainer, searchBar, unsetLinkStyle, containerLeftRight } from '../../styling/StylingVariables.js';
import { getAllUsers, getCurrentUser } from '../../services/auth-service.js';
import Loading from '../loading/Loading.js';

let friendsInGroup = [];
export function CreateGroupForm({ user, isLoading, setIsLoading, props }) {
    const localUser = JSON.parse(localStorage.getItem("user"))
    const [users, setUsers] = useState(undefined)
    const [CurrentUser, setUser] = useState(undefined)
    const [groups, setGroups] = useState(undefined)

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
    }, [])

    useEffect(() => {
        getCurrentUser().then((data) => {
            setUser(data)
            console.log(data.preferences.style)
        })
    }, [])

    useEffect(() => {
        getAllGroups().then((data) => {
            setGroups(data)
        })
    }, [])

    useEffect(() => {
        if (user) setIsLoading(false)

    }, [user, setIsLoading])


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
                        <div style={containerLeftRight(user.preferences.style)}>
                            <Link to="/chatGroups" style={unsetLinkStyle(user.preferences.style)}>
                                <div style={{ ...smallButton(user.preferences.style), ...{ width: '70px' } }}>Cancel</div>
                            </Link>
                            <div style={{ ...{ width: '200px' } }}>

                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <h1 className="is-size-1 has-text-white">New Group Chat</h1>
                                </div>

                            </div>
                            <Link to="/chatGroups" style={unsetLinkStyle(user.preferences.style)}>
                                <div style={{ ...smallButton(user.preferences.style), ...{ width: '70px' } }} onClick={() => createGroups(props.name, props.description, friendsInGroup, localUser.id, "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")}>Create Group</div>
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
                            style={searchBar(user.preferences.style)}
                            type="text"
                            placeholder="Search"
                            onChange={handleSearchInput}
                            value={searchInput} />
                        {users ? users.map(person => (
                            <div className='userDiv' key={person._id}>
                                <div style={chatContainer(user.preferences.style)}>
                                    <div className='friendTile' style={{ ...friendsTile(user.preferences.style), ...{ margin: 'unset' } }}>
                                        <div className='friendItems' style={friendItems(user.preferences.style)}>
                                            <div className='friendIcon' style={fakePF(user.preferences.style)}></div>
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
                                            <div style={{ ...smallButton(user.preferences.style), ...{ width: '70px' } }}>Add</div>
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
