import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { createGroups } from '../../services/groups-service.js';


// styling
import 'bulma/css/bulma.min.css';
import { smallButton, friendsTile, friendItems, fakePF, chatContainer, searchBar, unsetLinkStyle } from '../../styling/StylingVariables.js';
import { getAllUsers, getCurrentUser } from '../../services/auth-service.js';

let friendsInGroup = [];
export function CreateGroupForm(props) {
    const localUser = JSON.parse(localStorage.getItem("user"))
    const [users, setUsers] = useState(undefined)
    const [CurrentUser, setUser] = useState(undefined)

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
        })
    }, [])


    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 className="is-size-1 has-text-white">New Group Chat</h1>
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
                    style={searchBar}
                    type="text"
                    placeholder="Search"
                    onChange={handleSearchInput}
                    value={searchInput} />
                {users ? users.filter((user) =>  user._id !== CurrentUser._id).map(user => (
                    <div key={user.id} className="userDiv">
                        <div style={chatContainer}>
                            <div className='friendTile' style={{ ...friendsTile, ...{ margin: 'unset' } }}>
                                <div className='friendItems' style={friendItems}>
                                    <div className='friendIcon' style={fakePF}></div>
                                    <div className='friendInfo'>
                                        <div className='friendName' style={{ fontWeight: 'bold' }}> {user.username} </div>
                                    </div>
                                </div>

                                <div style={{
                                    justifySelf: 'flex-end',
                                    display: 'flex',
                                    alignItems: 'center',
                                }} onClick={(e) => {
                                    friendsInGroup.push(user)
                                    e.target.closest(".userDiv").remove()
                                    // TODO: remove user after button is clicked
                                }}>
                                    <div style={{ ...smallButton, ...{ width: '70px' } }}>Add</div>
                                </div>

                            </div>

                        </div>
                    </div>
                ))
                : <div></div>}
                {/* TODO: add friend when button is clicked */}
                <div style={{
                    justifySelf: 'flex-end',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Link to="/community" style={unsetLinkStyle}>
                        <div style={{ ...smallButton, ...{ width: '70px' } }} onClick={() => createGroups(props.name, props.description, friendsInGroup, localUser.id, "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")}>Create Group</div>
                    </Link>
                    <div style={{...{ width: '200px'}}}>

                    </div>
                    <Link to="/community" style={unsetLinkStyle}>
                        <div style={{ ...smallButton, ...{ width: '70px' } }}>Cancel</div>
                    </Link>
                </div>
            </div>
        </>
    );
}
