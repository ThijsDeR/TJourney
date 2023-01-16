import "../../../components/navigation/navigation.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faHome, faListCheck, faUserGear, faUsers } from '@fortawesome/free-solid-svg-icons';
import { buttonStyling, navButtonContainer, selectedStyling } from "../../../components/navigation/NavStylingVariables";


const HomescreenTutorial = ({ user, updateTutorialPosition, screenPart, updateTutorialScreenPart }) => {
    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute" }} onClick={() => updateTutorialScreenPart()} />

            <div style={{ zIndex: 30, width: "100%" }}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30, width: "100%" }}>
                        Welcome to the tutorial
                        <div> Tap to continue </div>
                    </div>
                }
                {screenPart === 1 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30, width: "100%" }}>
                        This is the homescreen
                    </div>
                }
                {screenPart === 2 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30 }}>
                        Here you can see your username and level
                    </div>
                }
                {screenPart === 3 &&
                    <div className="has-text-white is-size-4 has-text-centered" style={{ position: 'absolute', bottom: "8vh", zIndex: 30 }}>
                        This is the navbar, which has:
                    </div>
                }
                {screenPart === 4 &&
                    <>
                        <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "80vh", zIndex: 30, width: "100%" }}>
                            Account:
                        </div>
                        <div className="has-text-white is-size-2" style={{ position: 'absolute', bottom: "8vh", left: "10vw", zIndex: 30 }}>
                            ↓
                        </div>
                    </>
                }
                {screenPart === 5 &&
                    <>
                        <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "80vh", zIndex: 30, width: "100%" }}>
                            Challenges:
                        </div>
                        <div className="has-text-white is-size-2" style={{ position: 'absolute', bottom: "8vh", left: "29vw", zIndex: 30 }}>
                            ↓
                        </div>
                    </>
                }
                {screenPart === 6 &&
                    <>
                        <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "80vh", zIndex: 30, width: "100%" }}>
                            Home:
                        </div>
                        <div className="has-text-white is-size-2" style={{ position: 'absolute', bottom: "8vh", left: "48vw", zIndex: 30 }}>
                            ↓
                        </div>
                    </>
                }
                {screenPart === 7 &&
                    <>
                        <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "80vh", zIndex: 30, width: "100%" }}>
                            Journey:
                        </div>
                        <div className="has-text-white is-size-2" style={{ position: 'absolute', bottom: "8vh", left: "68vw", zIndex: 30 }}>
                            ↓
                        </div>
                    </>
                }
                {screenPart === 8 &&
                    <>
                        <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "80vh", zIndex: 30, width: "100%" }}>
                            Challenges:
                        </div>
                        <div className="has-text-white is-size-2" style={{ position: 'absolute', bottom: "8vh", left: "86vw", zIndex: 30 }}>
                            ↓
                        </div>
                    </>
                }
                {screenPart >= 9 &&
                    <>
                        <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "80vh", zIndex: 30, width: "100%" }}>
                            Let's go to account
                        </div>
                        <div className="has-text-white is-size-2" style={{ position: 'absolute', bottom: "8vh", left: "10vw", zIndex: 30 }}>
                            ↓
                        </div>
                    </>
                }
            </div>

            <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                <section className="bg-image" style={{ height: "100%", width: "100%" }}>
                    <div className="is-flex is-justify-content-center" />
                </section>
            </div>

            <div className="is-flex is-justify-content-center" style={screenPart === 2 ? { position: "relative", zIndex: "30", color: "white" } : { position: "relative" }}>
                <h2 className="is-size-3 has-text-weight-bold">{user ? user.username : ""} (27 (1200/2800))</h2>
            </div>

            <div className="nav-bottom" style={screenPart >= 3 ? { zIndex: "30" } : {}}>
                <div style={navButtonContainer(user.preferences.style)} >
                    {user ?
                        <>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}} onClick={screenPart >= 9 ? () => updateTutorialPosition() : () => { }}><FontAwesomeIcon icon={faUserGear} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faListCheck} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style), ...selectedStyling(user.preferences.style)}}><FontAwesomeIcon icon={faHome} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faMap} /></Link>
                            <Link to="" style={{ ...buttonStyling(user.preferences.style)}}><FontAwesomeIcon icon={faUsers} /></Link>
                        </> :
                        <>
                            <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Login</Link>
                            <Link to="#" style={{ ...buttonStyling(user.preferences.style)}}>Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default HomescreenTutorial;