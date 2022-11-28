import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";
import React, { useState, useEffect } from "react";

// https://www.npmjs.com/package/react-activity
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";

function Api() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [swapiItems, setSwapiItems] = useState([]);
    const [userNamePost, setUserNamePost] = useState([]);
    const [challengePost, setChallengePost] = useState([]);
    const [somethingElsePost, setSomethingElsePost] = useState([]);
    const [userNamePut, setUserNamePut] = useState([]);
    const [challengePut, setChallengePut] = useState([]);
    const [somethingElsePut, setSomethingElsePut] = useState([]);


    function getSwapiData() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setSwapiItems(result);
                    setUserNamePut(result.name);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                    setIsLoaded(true);
                });
    }

    const postData = () => {
        fetch('http://ptsv2.com/t/c33xu-1669373343/post', {
            method: 'POST',
            mode: "no-cors",
            body: JSON.stringify({
                // Add parameters here
                'username': userNamePost,
                'challenge': challengePost,
                'something else': somethingElsePost
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

    const putData = () => {
        fetch('http://ptsv2.com/t/c33xu-1669373343/post', {
            method: 'PUT',
            mode: "no-cors",
            body: JSON.stringify({
                // Add parameters here
                'username': userNamePut,
                'challenge': challengePut,
                'something else': somethingElsePut
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
        <div className="mx-3 my-5 py-5">
            <Navigation />
                <div className="title">
                    Get example:
                </div>
                {isLoaded ?
                    <div>
                        <div>{swapiItems.name}</div>
                        <div>mass: {swapiItems.mass}</div>
                        <div>height: {swapiItems.height}</div>
                    </div>
                    :
                    <Spinner />}

            {/* ============================================================================================================================================ */}

            <h1 className="title">
                Post example:
            </h1>

            <form action="">
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left
                      has-icons-right">
                        <input
                            class="input is-success"
                            type="text"
                            placeholder="Enter your username"
                            onChange={(e) => setUserNamePost(e.target.value)}
                        />
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Challenge</label>
                    <div class="control has-icons-left
                      has-icons-right">
                        <textarea
                            class="input"
                            type="challenge"
                            placeholder="Enter your challenge"
                            onChange={(e) => setChallengePost(e.target.value)}
                        />
                        <span class="icon is-small is-left">
                            <i class="fas fa-key"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">
                        Something Else
                    </label>
                    <div class="control">
                        <textarea
                            class="textarea"
                            placeholder="Want to tell anything?"
                            onChange={(e) => setSomethingElsePost(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" />
                            I agree to the <a href="#">
                                terms and conditions
                            </a>
                        </label>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success" onClick={postData}>
                            Post
                        </button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>


            {/* ============================================================================================================================================ */}


            <h1 className="title">Put example:</h1>

            <form action="">
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left
                      has-icons-right">
                        <input
                            class="input is-success"
                            type="text"
                            placeholder="Enter your username"
                            value={userNamePut}
                            onChange={(e) => setUserNamePut(e.target.value)}
                        />
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Challenge</label>
                    <div class="control has-icons-left
                      has-icons-right">
                        <textarea
                            class="input"
                            type="challenge"
                            placeholder="Enter your challenge"
                            value={challengePut}
                            onChange={(e) => setChallengePut(e.target.value)}
                        />
                        <span class="icon is-small is-left">
                            <i class="fas fa-key"></i>
                        </span>
                    </div>
                </div>

                <div class="field">
                    <label class="label">
                        Something Else
                    </label>
                    <div class="control">
                        <textarea
                            class="textarea"
                            placeholder="Want to tell anything?"
                            onChange={(e) => setSomethingElsePut(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div class="field">
                    <div class="control">
                        <label class="checkbox">
                            <input type="checkbox" />
                            I agree to the <a href="#">
                                terms and conditions
                            </a>
                        </label>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-success" onClick={putData}>
                            Put
                        </button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">
                            Cancel
                        </button>
                    </div>
                </div>
            </form>

            {/* ============================================================================================================================================ */}

            {/* <Footer /> */}
        </div>
    );
}

export default Api;