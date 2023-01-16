// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

// styling
import 'bulma/css/bulma.min.css';
import { pageStyle, appContainer, goBackIndicator, title, tileGoalsCreate } from '../../styling/StylingVariables.js';

export function
    SelectGoalPlan(props) {
    const stepBackHandler = () => {
        props.setStepHandler(2)
    }

    const submitHandler = () => {
        props.setStepHandler(4)
    }
    return (
        <>
            <div style={pageStyle(props.user.preferences.style)}>
                <div style={appContainer(props.user.preferences.style)}>

                    <div style={goBackIndicator(props.user.preferences.style)}>
                        <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                        <span style={{ paddingLeft: '10px', color: props.user.preferences.style.primaryColor }}>Go back</span>
                    </div>

                    <span style={{ ...title(props.user.preferences.style), ...{ paddingBottom: '20px' } }} >Select pre-made plan</span>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20 }}>
                        <a href className="is-small is-size-1" style={{ color: props.user.preferences.style.primaryColor }} onClick={stepBackHandler}>&lt;</a>
                        <h1 className="is-size-1">Plan</h1>
                    </div>

                    <div className="container mx-3" >
                        <div className="box" style={{ backgroundColor: props.user.preferences.style.secondaryColor, color: 'red' }}>
                            <article className="media">
                                <div className="media-content">
                                    <div className="content">
                                        <div className="field">
                                            <label className="label">Name</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="Goal Name" onInput={(e) => props.setName(e.target.value)} value={props.name} />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Description</label>
                                            <div className="control">
                                                <textarea className="textarea" placeholder="Goal Description" onInput={(e) => props.setDescription(e.target.value)} value={props.description}></textarea>
                                            </div>
                                        </div>

                                        <div className="field">

                                        </div>

                                        <div className="field is-grouped">
                                            <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                                <label className="label has-text-centered">Start Value</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Start Value" style={{ width: "100%" }} onInput={(e) => props.setStartValue(e.target.value)} value={props.startValue} />
                                                </div>
                                            </div>
                                            <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                                <label className="label has-text-centered">End Value</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="End Value" onInput={(e) => props.setEndValue(e.target.value)} value={props.endValue} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field is-grouped">
                                            <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                                <label className="label has-text-centered">Start Date</label>
                                                <div className="control">
                                                    <input className="input" type="date" placeholder="Start Date" style={{ width: "100%" }} onInput={(e) => props.setStartDate(e.target.value)} value={props.startDate} />
                                                </div>
                                            </div>
                                            <div style={{ width: "50%", paddingRight: "5px", paddingLeft: "5px" }}>
                                                <label className="label has-text-centered">End Date</label>
                                                <div className="control">
                                                    <input className="input" type="date" placeholder="End Date" onInput={(e) => props.setEndDate(e.target.value)} value={props.endDate} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button className="button is-link" style={{ backgroundColor: props.user.preferences.style.primaryColor }} onClick={submitHandler}>Submit</button>
                                            </div>
                                            <div className="control">
                                                <button className="button is-link is-light">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
