import "../../../components/navigation/navigation.css";
import { Link } from "react-router-dom";

const FinalScreenTutorial = ({ user, updateTutorialPosition, screenPart, updateTutorialScreenPart }) => {
    return (
        <>
            <div style={{ zIndex: "20", backgroundColor: "rgb(0, 0, 0, 0.5)", width: "100vw", height: "100vh", position: "absolute" }} 
            onClick={ screenPart >= 2 ? () => updateTutorialPosition() : () => updateTutorialScreenPart()} />

            <div style={{ zIndex: 30, width: "100%" }}>
                {screenPart === 0 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30, width: "100%" }}>
                        That's it for the tutorial
                    </div> 
                }
                {screenPart === 1 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30, width: "100%" }}>
                        You can redo this tutorial any time from the account page
                    </div> 
                }
                {screenPart === 2 &&
                    <div className="has-text-white is-size-3 has-text-centered" style={{ position: 'absolute', top: "5vh", zIndex: 30, width: "100%" }}>
                        We hope you enjoy our app!
                    </div> 
                }
            </div>

            <div style={{ position: "fixed", top: "0px", bottom: "0px", left: "0px", right: "0px" }}>
                <section className="bg-image" style={{ height: "100%", width: "100%" }}>
                    <div className="is-flex is-justify-content-center" />
                </section>
            </div>

            <div className="is-flex is-justify-content-center" style={{ position: "relative" }}>
                <h2 className="is-size-3 has-text-weight-bold">{user ? user.username : ""} (27 (1200/2800))</h2>
            </div>

            <div className="nav-bottom">
                <div className="nav-buttons is-flex" >
                    {user ?
                        <>
                            <Link to="#">A</Link>
                            <Link to="#">CH</Link>
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
            
export default FinalScreenTutorial;