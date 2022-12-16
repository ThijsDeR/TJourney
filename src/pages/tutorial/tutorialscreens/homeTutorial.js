import "../../../components/navigation/navigation.css";
import { Link } from "react-router-dom";

const HomescreenTutorial = ({ user, updateTutorialPosition, screenPart, updateTutorialScreenPart }) => {
    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute" }} onClick={() => updateTutorialScreenPart()} />
            {screenPart === 0 &&
                <div className="modal-content has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30 }}>
                    This is the homescreen
                </div>
            }
            {screenPart === 1 &&
                <div className=" has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30 }}>
                    Here you can see your username and level
                </div>
            }
            {screenPart === 2 &&
                <div className=" has-text-white is-size-4 has-text-centered" style={{ position: 'absolute', bottom: "8vh", zIndex: 30 }}>
                    This is the navbar, which has:
                </div>
            }
            {screenPart === 3 &&
                <div className=" has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "0vw", zIndex: 30 }}>
                    Logout:
                </div>
            }
            {screenPart === 4 &&
                <div className=" has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "14vw", zIndex: 30 }}>
                    Challenges:
                </div>
            }
            {screenPart === 5 &&
                <div className=" has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "37vw", zIndex: 30 }}>
                    Home:
                </div>
            }
            {screenPart === 6 &&
                <div className=" has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "54vw", zIndex: 30 }}>
                    Journey:
                </div>
            }
            {screenPart === 7 &&
                <div className=" has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "65vw", zIndex: 30 }}>
                    Challenges:
                </div>
            }
            {screenPart >= 8 &&
                <div className=" has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "10vw", zIndex: 30 }}>
                    Let's go to challenges
                </div>
            }

            <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                <section className="bg-image" style={{ height: "100%", width: "100%" }}>
                    <div className="is-flex is-justify-content-center" />
                </section>
            </div >

            <div className="is-flex is-justify-content-center  has-text-white" style={screenPart === 1 ? { position: "relative", zIndex: "30" } : { position: "relative" }}>
                <h2 className="is-size-3 has-text-weight-bold">{user ? user.username : ""} (27 (1200/2800))</h2>
            </div>

            <div className="nav-bottom" style={screenPart >= 2 ? { zIndex: "30" } : {}}>
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#">L</Link>
                            <Link to="#" onClick={screenPart >= 8 ? () => updateTutorialPosition() : ""}>CH</Link>
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

        // <>
        //     <div className="modal is-active" onClick={() => updateTutorialScreenPart()}>
        //         <div className="modal-background" />

        //         {/* <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}> */}
        //         <section className="bg-image" style={{ height: "100%", width: "100%" }}>
        //             <div className="is-flex is-justify-content-center modal-content has-text-white">
        //                 <h2 className="is-size-3 has-text-weight-bold">{user ? user.username : ""} (27 (1200/2800))</h2>
        //             </div>
        //             <div className="is-flex is-justify-content-center">
        //             </div>
        //         </section>
        //         {/* </div > */}

        //         {screenPart === 0 &&
        //             <div className="modal-content has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh" }}>
        //                 This is the homescreen
        //             </div>
        //         }
        //         {screenPart === 1 &&
        //             <div className="modal-content has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh" }}>
        //                 Here you can see your username and level
        //             </div>
        //         }
        //         {screenPart === 2 &&
        //             <div className="modal-content has-text-white is-size-4 has-text-centered" style={{ position: 'absolute', bottom: "8vh" }}>
        //                 This is the navbar, which has:
        //             </div>
        //         }
        //         {screenPart === 3 &&
        //             <div className="modal-content has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "0vw" }}>
        //                 Logout:
        //             </div>
        //         }
        //         {screenPart === 4 &&
        //             <div className="modal-content has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "14vw" }}>
        //                 Challenges:
        //             </div>
        //         }
        //         {screenPart === 5 &&
        //             <div className="modal-content has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "37vw" }}>
        //                 Home:
        //             </div>
        //         }
        //         {screenPart === 6 &&
        //             <div className="modal-content has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "54vw" }}>
        //                 Journey:
        //             </div>
        //         }
        //         {screenPart === 7 &&
        //             <div className="modal-content has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "65vw" }}>
        //                 Challenges:
        //             </div>
        //         }
        //         {screenPart === 8 &&
        //             <div className="modal-content has-text-white is-size-4" style={{ position: 'absolute', bottom: "8vh", left: "65vw" }}>
        //                 Challenges:
        //             </div>
        //         }
        //         <div className="nav-bottom">
        //             <div className="nav-buttons is-flex">
        //                 {
        //                     user ?
        //                         <>
        //                             {screenPart === 1 ?
        //                                 <Link to="#" style={{ zIndex: "1", position: "relative", color: "white" }}>L</Link>
        //                                 :
        //                                 <Link to="#">L</Link>
        //                             }
        //                             <Link to="#">CH</Link>
        //                             <Link to="#">H</Link>
        //                             <Link to="#">J</Link>
        //                             <Link>Co</Link>
        //                         </> :
        //                         <>
        //                             <Link to="#">Login</Link>
        //                             <Link to="#">Sign Up</Link>
        //                         </>
        //                 }
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default HomescreenTutorial;