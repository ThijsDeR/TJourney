import Navigation from "../../../components/navigation/Navigation";
import Loading from "../../../components/loading/Loading";
import { useEffect, useState } from "react";
import { getAllGoals } from "../../../services/goal-service";
import { Navigate } from "react-router-dom";

export function GoalsIndex({ user, isLoading }) {
    const [goals, setGoals] = useState(undefined)

    useEffect(() => {
        getAllGoals().then((data) => {
            setGoals(data)
        })
    }, [])

    if (!user && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: "black", overflowY: "auto"}}>
                            {
                                goals
                                    ? <>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <h1 className="is-size-1 has-text-white">Goal list</h1>
                                        </div>
                                        {goals.map((goal) => (
                                            <>
                                                <div className="container m-3">
                                                    <div className="box">
                                                        <article class="media">
                                                            <div class="media-content" style={{overflow: "hidden"}}>
                                                                <div class="content">
                                                                    <ul>
                                                                        <li>Name: {goal.name}</li>
                                                                        <li>description: {goal.description}</li>
                                                                        <li>startValue: {goal.startValue}</li>
                                                                        <li>endValue: {goal.endValue}</li>
                                                                        <li>startDate: {goal.startDate}</li>
                                                                        <li>endDate: {goal.endDate}</li>
                                                                        <li>category: {goal.category}</li>
                                                                    </ul>
                                                                    <div class="field is-grouped">
                                                                        <div class="control">
                                                                            <button class="button is-link">Edit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <nav class="level is-mobile">
                                                                    <div class="level-left">
                                                                        <a class="level-item" aria-label="reply">
                                                                            <span class="icon is-small">
                                                                                <i class="fas fa-reply" aria-hidden="true"></i>
                                                                            </span>
                                                                        </a>
                                                                        <a class="level-item" aria-label="retweet">
                                                                            <span class="icon is-small">
                                                                                <i class="fas fa-retweet" aria-hidden="true"></i>
                                                                            </span>
                                                                        </a>
                                                                        <a class="level-item" aria-label="like">
                                                                            <span class="icon is-small">
                                                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                                                            </span>
                                                                        </a>
                                                                    </div>
                                                                </nav>
                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </> : ""
                            }
                        </div>
                        <Navigation user={user} />
                    </>
            }
        </>
    );
}