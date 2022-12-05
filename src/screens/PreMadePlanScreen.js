import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation"



const divStyle = {
    margin: "10px",
    display:"inline-block", 
    width: "340px", height: "75px", 
    padding: "5px", border: "1px ",
    borderRadius: "5px",backgroundColor:"plum",
    textAlign: "center",
    color: "white",  
};

function ChallengeScreen() {

    return (
        <>
        <Navigation/>
        
        <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px",}}>
            <div style={{position:"center"}}>
            <h1>Premade Plan</h1>
            </div>
            <h1>Premade Plan</h1>
            <div style={divStyle}>
                <h2>Nutrition</h2>
            </div>
            <div style={divStyle}>
                <h2>Sleep</h2>
            </div>
            <div style={divStyle}>
                <h2>Screentime</h2>
            </div>
            <div style={divStyle}>
                <h2>Activity</h2>
            </div>

        </div>
        <Footer/>
        </>
    );
}

export default ChallengeScreen