import Navigation from "../../../components/navigation/Navigation";
import Loading from "../../../components/loading/Loading";
import { useEffect, useState } from "react";
import { getAllGoals } from "../../../services/goal-service";
import { Navigate, useRouteError } from "react-router-dom";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, goBackIndicator, title, tileGoalsCreate } from '../../../styling/StylingVariables.js';

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
                        <div style={pageStyle(user.preferences.style)}>
                            <div style={appContainer(user.preferences.style)}>
                                {
                                    goals
                                        ? <>
                                            <div style={goBackIndicator(user.preferences.style)}>
                                                <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                                                <span style={{ paddingLeft: '10px', color: user.preferences.style.primaryColor }}>Go back</span>
                                            </div>

                                            <span style={{ ...title(user.preferences.style), ...{ paddingBottom: '20px' } }} >Choose a category</span>
                                            {goals.map((goal) => (
                                                <>

                                                    <div className="box" style={{ backgroundColor: user.preferences.style.secondaryColor, marginBottom: '10px', color: user.preferences.style.textColor, }}>
                                                        <article className="media">
                                                            <div className="media-content" style={{ overflow: "hidden" }}>
                                                                <div className="content">
                                                                    <ul style={{ listStyle: 'none', margin: 'unset', marginBottom: '20px' }}>
                                                                        <li><b>Name</b>: {goal.name}</li>
                                                                        <li><b>description</b>: {goal.description}</li>
                                                                        <li><b>startValue</b>: {goal.startValue}</li>
                                                                        <li><b>endValue</b>: {goal.endValue}</li>
                                                                        <li><b>startDate</b>: {goal.startDate}</li>
                                                                        <li><b>endDate</b>: {goal.endDate}</li>
                                                                        <li><b>category</b>: {goal.category}</li>
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
                                                </>
                                            ))}
                                        </> : ""
                                }
                            </div>
                            <Navigation user={user} />
                        </div>
                    </>
            }
        </>
    );
}
