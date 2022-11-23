import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import React, { useState, useEffect } from "react";

function Api() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [swapiItems, setSwapiItems] = useState([]);
    const [userName, setUserName] = useState([]);
    const [number, setNumber] = useState([]);
    const [stuff, setStuff] = useState([]);


    function getSwapiData() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setSwapiItems(result);
                    setUserName(result.name);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    setIsLoaded(true);
                }
            );
    }

    const postData = () => {
        fetch('http://ptsv2.com/t/2npxg-1669132007/post', {
            method: 'POST',
            mode: "no-cors",
            body: JSON.stringify({
                // Add parameters here
                'username': userName,
                'number': number,
                'stuff': stuff
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log('error: ' + err.message);
            });
    }

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        getSwapiData();
    }, [])

    return (
        <>
            <Navigation />
            <h1 className="mt-5 pt-5">
                <ul>
                    {isLoaded ? swapiItems.name : "loading..."}
                </ul>
            </h1>
            <form>
                <label>Enter your name:
                    <input type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label>Enter a number:
                    <input type="text" 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}/>
                </label>
                <label>Enter some stuff:
                    <input type="text"
                    value={stuff}
                    onChange={(e) => setStuff(e.target.value)} />
                </label>
            </form>
            <button onClick={postData}>Post some data</button>
            <Footer />
        </>
    );


}

export default Api;