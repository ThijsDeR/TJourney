import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation"



const divStyle = {
    margin: "10px",
    display: "inline-block",
    width: "340px", height: "75px",
    padding: "5px", border: "1px ",
    borderRadius: "5px", backgroundColor: "plum",
    textAlign: "center",
    color: "white",
};

function PremadePlan() {

    return (
        <>
            <Navigation />

            <div style={{ position: "fixed", top: "100px", bottom: "100px", left: "0px", right: "0px", justifyContent:"center" }}>
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", fontSize: "20px" }}>
                    <b>Pick a Plan</b>
                </div>

                <div style={divStyle}>
                    <h2>Drink 5 liter of water a day</h2>
                </div>
                <div style={divStyle}>
                    <h2>Sleep 8 hours a day</h2>
                </div>
                <div style={{ textAlign: "center", display: "flex", justifyContent: "center", fontSize: "20px", backgroundColor:"grey", borderRadius:"10px" }}>
                    <p onClick={event =>  window.location.href='/goals'}>Add a new plan</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PremadePlan