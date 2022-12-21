import Navigation from "../../../components/navigation/Navigation";
import Loading from "../../../components/loading/Loading";
import { useEffect, useState } from "react";
import { getAllGoals } from "../../../services/goal-service";
import { Navigate, useRouteError } from "react-router-dom";

export function GoalsIndex({ user, isLoading, setIsLoading }) {
    const [goals, setGoals] = useState(undefined)

    useEffect(() => {
        getAllGoals().then((data) => {
            setGoals(data)
            setIsLoading(false)
        })
    }, [setIsLoading])

    if (!user && !isLoading) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            {
                isLoading ? <Loading /> :
                    <>
                        <div style={{ position: "fixed", top: "0", bottom: "0", left: "0px", right: "0px", backgroundColor: user.preferences.style.backgroundColor, color: user.preferences.style.textColor, overflowY: "auto" }}>
                            {
                                goals
                                    ? <>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                            <h1 className="is-size-1">Goal list</h1>
                                        </div>
                                        {goals.map((goal) => (
                                            <>
                                                <div className="container m-3">
                                                    <div className="box">
                                                        <article className="media">
                                                            <div className="media-content" style={{ overflow: "hidden" }}>
                                                                <div className="content">
                                                                    <ul style={{ listStyle: "none" }}>
                                                                        <li>Name: {goal.name}</li>
                                                                        <li>description: {goal.description}</li>
                                                                        <li>startValue: {goal.startValue}</li>
                                                                        <li>endValue: {goal.endValue}</li>
                                                                        <li>startDate: {goal.startDate}</li>
                                                                        <li>endDate: {goal.endDate}</li>
                                                                        <li>category: {goal.category}</li>
                                                                    </ul>
                                                                    <div className="field is-grouped">
                                                                        <div className="control">
                                                                            <button className="button" style={{ backgroundColor: user.preferences.style.primaryColor }}>Edit</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
