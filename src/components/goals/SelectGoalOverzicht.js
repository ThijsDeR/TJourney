// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, goBackIndicator, title, tileGoalsCreate } from '../../styling/StylingVariables.js';
import { Link } from "react-router-dom";

export function SelectGoalOverzicht(props) {
    const stepBackHandler = () => {
        props.setStepHandler(2)
    }

    const submitHandler = () => {
        props.setDone(true)
    }
    return (
        <>
            <div style={pageStyle(props.user.preferences.style)}>
                <div style={appContainer(props.user.preferences.style)}>

                    <div style={goBackIndicator(props.user.preferences.style)}>
                        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                        <span style={{ paddingLeft: '10px', color: props.user.preferences.style.primaryColor }}>Go back</span>
                    </div>

                    <span style={{ ...title(props.user.preferences.style), ...{ paddingBottom: '20px' } }} >Overview of your new goal</span>

                    <div>
                        <div className="box" style={{ color: props.user.preferences.style.textColor, backgroundColor: props.user.preferences.style.secondaryColor }}>
                            <article className="media">
                                <div className="media-content">
                                    <div className="content">
                                        <ul style={{ listStyle: 'none', margin: 'unset', marginBottom: '20px', color: props.user.preferences.style.textColor }}>
                                            <li><b>Name</b>: {props.name}</li>
                                            <li><b>Description</b>: {props.description}</li>
                                            <li><b>startValue </b>: {props.startValue}</li>
                                            <li><b>endValue</b>: {props.endValue}</li>
                                            <li><b>startDate </b>: {props.startDate}</li>
                                            <li><b>endDate </b>: {props.endDate}</li>
                                            <li><b>category </b>: {props.category}</li>
                                        </ul>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button className="button is-link" style={{ backgroundColor: props.user.preferences.style.primaryColor }} onClick={submitHandler}>Submit</button>
                                            </div>
                                            <div className="control">
                                                <button onClick={stepBackHandler} className="button is-link is-light">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}
