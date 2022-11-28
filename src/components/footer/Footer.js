import "./footer.css";

function Footer() {
    return (
        <>
            <footer className="footer" style={{position: "fixed", bottom: "0px", left: "0px", right: "0px", height: "100px"}}>
                <div className="content has-text-centered">
                    <p>
                        <strong>TJourney</strong> by <a href="https://jgthms.com">Group 8 HZ</a>. 
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;