import "../../../components/navigation/navigation.css";
import { Link } from "react-router-dom";

const HomescreenTutorial = ({ user, updateTutorialPosition, screenPart, updateTutorialScreenPart }) => {
    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute" }} onClick={() => updateTutorialScreenPart()} />

            <div style={{ zIndex: 30, width: "100%" }}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30, width: "100%" }}>
                        This is the homescreen
                    </div>
                }
                {screenPart === 1 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30 }}>
                        Here you can see your username and level
                    </div>
                }
                {screenPart === 2 &&
                    <div className="has-text-white is-size-4 has-text-centered" style={{ position: 'absolute', bottom: "8vh", zIndex: 30 }}>
                        This is the navbar, which has:
                    </div>
                }
                {screenPart === 3 &&
                    <div className="has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "0vw", zIndex: 30 }}>
                        Account:
                    </div>
                }
                {screenPart === 4 &&
                    <div className="has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "14vw", zIndex: 30 }}>
                        Challenges:
                    </div>
                }
                {screenPart === 5 &&
                    <div className="has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "37vw", zIndex: 30 }}>
                        Home:
                    </div>
                }
                {screenPart === 6 &&
                    <div className="has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "54vw", zIndex: 30 }}>
                        Journey:
                    </div>
                }
                {screenPart === 7 &&
                    <div className="has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "65vw", zIndex: 30 }}>
                        Challenges:
                    </div>
                }
                {screenPart >= 8 &&
                    <div className="has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "0vw", zIndex: 30 }}>
                        Let's go to account
                    </div>
                }
            </div>

            <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                <section className="bg-image" style={{ height: "100%", width: "100%" }}>
                    <div className="is-flex is-justify-content-center" />
                </section>
            </div>

            <div className="is-flex is-justify-content-center" style={screenPart === 1 ? { position: "relative", zIndex: "30", color: "white" } : { position: "relative" }}>
                <h2 className="is-size-3 has-text-weight-bold">{user ? user.username : ""} (27 (1200/2800))</h2>
            </div>

            <div className="nav-bottom" style={screenPart >= 2 ? { zIndex: "30" } : {}}>
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#" onClick={screenPart >= 8 ? () => updateTutorialPosition() : () => {}}>L</Link>
                            <Link to="#">A</Link>
                            <Link to="#">H</Link>
                            <Link to="#">J</Link>
                            <Link>Co</Link>
                        </> :
                        <>
                            <Link to="#">Login</Link>
                            <Link to="#">Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default HomescreenTutorial;