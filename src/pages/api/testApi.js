import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import React, { useState, setState, useEffect } from "react";

function Api() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [swapiItems, setSwapiItems] = useState([]);
    const [postId, setPostId] = useState(null);

    const getSwapiData = fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setSwapiItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
                setIsLoaded(true);
            }
        );

    const postData = () => {
        fetch('http://ptsv2.com/t/2npxg-1669132007/post', {
            method: 'POST',
            mode: "no-cors",
            body: JSON.stringify({
                // Add parameters here
                'potato': 1
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
    }, [])

    return (
        <>
            <Navigation />
            <h1 className="mt-5 pt-5">
                Test
                <ul>
                    {isLoaded ? swapiItems.name : "loading..."}
                </ul>
            </h1>
            <button onClick={postData}>Post some data</button>
            <Footer />
        </>
    );
}

export default Api;