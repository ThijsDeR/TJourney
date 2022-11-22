import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import React, { useState, setState, useEffect } from "react";

function Api() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [swapiItems, setSwapiItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://swapi.dev/api/people/1")
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
            )
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
            <Footer />
        </>
    );
}

export default Api;